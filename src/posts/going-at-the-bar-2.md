---
title: Modeling French Cafés
description: A cultural evolutionist (CE), a physicist, and a philosopher still at the French café.
date: 2024-11-01
categories:
  - phd
  - collIntentionality
  - CGS
  - GMEs
published: false
pinned: false
coverImage: uvm_offering.webp
---

<script>
	import gmesScribble from '$lib/assets/gmesScribble.webp';
</script>

<div class="script">

  <div class="scene-heading">
  Act II
  </div>

  <div class="parenthetical">FADE IN:<br>A cultural evolutionist, a physicist, and a philosopher are still debating the nature of groups at a French Café. Physicist is proposing a group-based models that incorporate the dual nature of groups and individuals to accomondate cultural evolutionist and the philosopher's on the importance of institutions...</div>

  <div class="character">Physicist</div>

  <div class="dialogue">
  Ok, physcists might have disregarded the importance of intentional groups. But to be fair, i'm still unsure if we can represent that in our models. More often than not, our view of group interactions are rooted in the structure and dynamics of higher-order networks. A group interaction is one where higher-order interactions, as defined by nonlinear effects in the dynamics, are non-reducible to the set of pairwise interactions within the group. 

  To make our social systems more mindful, we’ll incorporate GAME-THEORETIC considerations into our model. Philosopher, we can use the children children example you gave previously, with children being highly motivated by a fair distribution of reward. 
  
  We'll assume that children have to distribute a PUBLIC GOOD, and that they need to do that as a group, which is embedded in a structured population. That is, our groups
  
  , we can use game theory on higher-order networks to model that. 
  
  Classical game theory assumes the outcome of a situation depends on the strategies of the participants. In CLASSICAL GAME THEORY, situations are discretized by round where, in its simplest version, a random pair of individuals are confronted to a single choice. They don't know each or will ever meet again, so that the choice is not impacted by personal considerations. Originally, it was about (rational) choices of actors, which included considerations about what the others will do.

  EVOLUTIONARY GAME THEORY is a spinoff where rounds are generations overtime and strategies involve fitness. In evolutionary game theory, you have a population of individuals were each round is a new generation. In both cases, choices are based on relative cost-benefit analysis, where strategies influence the payoffs. It can be reproductive success, or money, or whatever abstract unit. 
  
  Be it rationality or fitness, something more is guiding the dynamics of the sytem than the structure and dynamics of the networks. Those "strategies" might not be the same than your collective intentionality but I believe this is a step in the right direction.
  
  Some physicists interested in higher-order structures modelled how the relative COST-BENEFIT ANALYSIS changes when collective benefits must be distributed among groups of participants. But as far as I know, they also conflate they nonlinear effects in the dynamics with group interactions. That is, they are not engaged in the idea of modeling the "group features" as emergent properties, distinct from that of individuals. 
  
  Anyway, assume that the groups, or cliques, have a distinct state of its constituents. Instead of tracking individuals through network connections, we will decompose the dynamics of the system in classes of groups, distinguishing between their size and the proportion of individuals in a given states.. Here, let me draw something for you...
  </div>

  <div class="parenthetical">The physicist grabs a napkin and make the following drawing...</div>

  <img alt="gmesScribble" src={gmesScribble} class="image"/>

  <div class="dialogue">
  You see, now we are tracking the probability flow of moving from one state, say two sharks and two tuna, into another state, say that of three sharks and one tuna. This is a neat trick. We can now model exactly what is happenning over the <em>probability distribution</em> of groups, not just for a single group. With this move we are loosing track of specific individuals, but we gain the ability to represent that is influencing the different rates of transition. We might think that a single fish surrounded by a large population of shark is much more likely to get eaten then the other way around.
  
  Consider the same set up, but for the evolution of cooperation where sharks and tuna are altruists and defectors. By having this network structure, that we call quenched in our jargon, we can easily represent the influence of groups on that of individual states. 
  
  To your point, philosopher, we can assume that groups have a "mind of their own". The groups is trying steer their members in a direction that is beneficial to the group, but can be costly to individuals. The degree to which individuals are skeptical of the group actions can be represented as a function that influencing individual (rational) decisions. I know this is not individual intentionalities and that groups are not "intentional", but at least we have a kind of laboratory where we can start investigating the tension between individuals and groups!
  </div>

  <div class="character">philosopher</div>

  <div class="dialogue">
  I like your effort, guys, but I feel we are still not talking about the same notion of irreducibility. At least now, we agree, agents and groups are represented. There is perhaps a notion of collective agency. And I know you say we will get there, I still doesn't see what I said what was the most important thing; again, <em>what is left when you substract the fact that each person acts from the fact that the group has acted?</em>
  </div>

  <div class="character">physicist</div>

  <div class="dialogue">
  You are very difficult to please. Yes, cliques are all the same. No, I don't have an answer to your question; i am not even sure what you mean by saying that. But common. Are we not getting somewhere? 
  <br><br>
  What is left when you substract the fact that each person participated or not to, say, a local composting program, based on their perception of the group, from the fact that the group has group implemented policies to encourage composting is a philosophical question. In my mind, what you are saying is that we need to know how the group itself has acted to be able to predict what will happens to the individuals, which is not nothing! We went a long way from our original model of mindless social systems where humans are bouncing balls.
  </div>

</div>


### Related content

<div class="page-navigation">
  <div class="page-button previous" style="opacity: 0;">
    <span class="label">Previous page</span>
    <a href="./" class="link"></a>
  </div>
  <div class="page-button next">
    <span class="label">Next act</span>
    <a href="./" class="link"></a>
  </div>
</div>

<style>

body {
    background-color: #f5f5f5;
    color: #333;
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    justify-content: center;
    padding: 2rem;
}

.script {
    max-width: 800px;
    padding: 2rem;
    box-sizing: border-box;
    line-height: 1.5;
}

.scene-heading {
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2rem 0 1rem;
    font-size: 1.2rem;
}

.character {
    margin-top: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    text-align: left;
    margin-left: 3rem;
}

.dialogue {
    margin: 0.5rem 0;
    text-align: left;
    margin-left: 5rem;
    white-space: pre-wrap;
}

.parenthetical {
    font-style: italic;
    text-align: left;
    margin-left: 4.5rem;
    color: #666;
}

 .image {
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
    max-width: 35rem;
    display: flex; 
    justify-content: center; 
    align-items: center;
  }

</style>