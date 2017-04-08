import { deserializeSummaries } from '@angular/compiler/src/aot/summary_serializer';
import { serialize } from '@angular/compiler/src/i18n/serializers/xml_helper';

import { List } from 'linqts';

export class Candidate {
  name: string;
}

export class Election{
  name: string;
  candidates : Array<Candidate>;
}


export class CandidateVote {
  candidate : Candidate;
  enabled : boolean;
}

export class Vote {
    name: string;
    candidates : Array<CandidateVote>;
    quantity : number;
}

export class Duel {
  
  ticScore : number = 0;
  tacScore : number = 0;

  public get  distance() : number {
    return Math.abs(this.ticScore-this.tacScore); 
  }

  public get ticWin() : boolean{
      return this.ticScore > this.tacScore
  }
  
  public get tacWin() : boolean{
      return  this.tacScore > this.ticScore;
  }

  public get winnerIfExist() : Candidate {
      if(this.ticWin) return this.tic;
      if(this.tacWin) return this.tac;
      return null;
  }

  public get looserIfExist() : Candidate {
      if(this.ticWin) return this.tac;
      if(this.tacWin) return this.tic;
      return null;
  }

  constructor(public tic: Candidate, public tac: Candidate){
       
  }

  resetScores():void{
    this.ticScore = 0;
    this.tacScore = 0;
  }

  public static fromCandidates(candidates : Array<Candidate>) : Array<Duel>{
    let result = new Array<Duel>();

    for(let i =0;i<candidates.length-1;i++){
        for(let j =i+1; j<candidates.length;j++){
            result.push(new Duel(candidates[i],candidates[j]));
        }
    }

    return result;
  }
}

export class SimulationRequest {

  constructor(
      public election : Election,
      public votes : Array<Vote>
  ) {

  }

  public static defaultFactory(election : Election) : SimulationRequest{
    return new SimulationRequest(election, []);
  }

}

export class CandidateResult {
  
  winAgainst : Array<Candidate> = [];

  constructor(public candidate : Candidate){

  }

  reset(){
    this.winAgainst.length = 0;
  }

  get score()  : number{
      return this.winAgainst.length;
  }
}

export class Simulation {
  
  get votes() {
    return this.request.votes;
  }

  get elections(){
    return this.request.election;
  }
  
  duels : Array<Duel>;
  results : Array<CandidateResult>;
  
  constructor(public request : SimulationRequest){
    this.duels = Duel.fromCandidates(this.elections.candidates);
    this.results = new List<Candidate>(this.elections.candidates).Select(x=> new CandidateResult(x)).ToArray();

    this.update()
  }
  
  update(){
    this.updateDuels();
    this.updateResults();
  }

  updateDuels() : void{
    for(let duel of this.duels){
      duel.resetScores();

        for(let vote of this.votes){
            let vc = vote.candidates;
            let tic = vc.find(x=>x.candidate == duel.tic);
            let ticRank = vc.indexOf(tic);

            let tac = vc.find(x=>x.candidate == duel.tac);
            let tacRank = vc.indexOf(tac);
            
            if ((tic.enabled && tac.enabled && ticRank < tacRank) || (tic.enabled && !tac.enabled)){
              duel.ticScore += vote.quantity;
              
            }
            else if ((tac.enabled && tic.enabled && tacRank < ticRank) || (tac.enabled && !tic.enabled)){
              duel.tacScore += vote.quantity;
            }
            else{

            }
        }
    }

    this.duels.sort((a,b)=>  a.distance - b.distance)
  }

  updateResults(){
    let duels = new List<Duel>(this.duels)

    for(let result of this.results){
        result.reset();

        let winAgainst : Array<Candidate>= duels.Where(x=> x.winnerIfExist == result.candidate).Select( x=>x.looserIfExist).ToArray();
        result.winAgainst.push(...winAgainst);
    }

    this.results.sort(x=> x.winAgainst.length);
  }

  public deleteVote(vote : Vote){
    let index = this.votes.indexOf(vote);
    this.votes.splice( index, 1 );
    this.update();
  }

  public addVote(name : string) : void{
      let newVote : Vote = {
          candidates : [],
          name : name,
          quantity : 10,
      };

      for(let c of this.elections.candidates){
        let cv : CandidateVote = {
          candidate : c,
          enabled : true,
        }
        newVote.candidates.push(cv);
        
      }
      
      this.votes.push(newVote);

      this.update();   
  }
}