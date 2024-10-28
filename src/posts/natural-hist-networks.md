---
title: A Natural History of Human Networks
description: How modes of intentionality influences our interaction patterns.
date: 2024-10-28
categories:
  - phd
  - collIntentionality
  - networks
published: false
pinned: false
coverImage: uvm_offering.webp
live: https://observablehq.com/@jstonge/uvm-course-offering-by-department
---

<script>
	import ArudaFig2 from '$lib/assets/ArudaFig2.webp';
</script>

Tomasello is well known for his series of book on the Natural History of X.  So far, we have [morality](https://www.hup.harvard.edu/books/9780674986824), [thinking](https://www.hup.harvard.edu/books/9780674986831), [agency](https://mitpress.mit.edu/9780262047005/the-evolution-of-agency/), [development](https://www.hup.harvard.edu/books/9780674248281) and [human communication](https://mitpress.mit.edu/9780262515207/origins-of-human-communication/). In each book, this is the same story but different topics. Tomasello argues that humans are special in that they display species-specific modes of intentionality; shared and collective intententionality. 

These modes of intentionalities came as a two-step processes. First, humans had to learn to work together on shared tasks, or joint commitments. They engaged in collaborative interactions with coordinated roles; think about hunting or children doing pretend play. It is old enough that this is ingrained early on in our development (as young as 9 months of age babies display motivation to understand others' as intentional agents), and our biology (one theory is that our white sclera has evolved to facilitate shared intetionality by following others' gaze). 

Based on shared intentionality, and growing environmental pressures in the pleistocene, a more abstraction notion of "We" emerged; a collective mode of intentionality where we construct institutional reality that goes beyond what is seen. This sense of "We" is all around us, in the forms of a symbolic niche. Children starting at 3-4 years of age start seeing it, by imposing rules to others that are not just made up in the moment, but that transcend momentary interactions. Children starts participating in policing normative beliefs, telling each others' about the "right" way to do things.

These modes of intentionality defines how one interacts with other indiviudals, but also with the group (see [this post](https://jstonge.vercel.app/we-networks) for that typology). 

Tomasello's typology is very similar to that of this recent [review](https://arxiv.org/html/2402.14938v1) of contagion dynamics on higher-order networks, where the authors discuss `one-on-one`, `many-to-one`, `one-to-many` and `many-to-many` modes of group interactions. 

<img alt="ArudaFig2" class="image" src={ArudaFig2} />

But how do they relate to each other, if at all? More generally, how do our human network models relate to that of human species-specific types of cooperation? Even more abstractly, what is the role, if any, of intentionality in the study of (higher-order) networks?

## Where is the group in group interactions in hypergraphs

Arruda et al. review models of group interactions in contagion processes. They provide a few examples of what they mean by group interactions. 

- `one-to-many`: thing of group chats in whatsapp, or information broadcasting more generally
- `many-to-one`: multiple friends pressuring you into buying the new iphone (complex contagion).
- `many-to-many`: maybe they have in mind subsets of people who collaborating research teams? Or how subgroups of people to participate to different threads on stack overflow. 

These examples hint at an underlying definition of groups. They are talking about multiple people in a momentary interactions, involving a spreading process that is a nonlinear function of the states of people in that interaction. Group membership is based on the spreading dynamics. For instance, they mention how group interactions is dependent on the mode of transmission of the disease (airborne vs direct transmission). 

They do mention typical categorization: households, schools, workplaces, and the broader communities. These are groups as depicted above because each of these situations involve different per-contact transmission probabilities. That is, people in the same household in a contagion involving airborne transmission is well captured by clique-based interactions.

Philosophically, this definition of groups entails that the same group of people, in two different contagion scenario, might or might not be a group. Households matter insofar as there are people interacting in cliques more often than not, but it says nothing about the same people interacting over and over again in the same clique. Hence, group persistence is not considered under that definition of groups as many-body interactions.  

Without group persistence, it is hard to imagine how `many-to-many` interactions can take hold.

The authors also mention the importance of group dynamics to curb epidemics in the context of cultural and psychological variations across countries, as well as the role of social identity in individual decision to vaccinate (see [here](https://www.pnas.org/doi/10.1073/pnas.2011674117) and [here](https://www.chip50.org/reports/approval-ratings-of-trump-and-bidens-presidencies)). It seems a different definition of groups altogether than the many-body definition; it is about duelling contagions whereas a social network of people, or pairwise interactions, are influenced by a social layer involving opinion dynamics.

## Intentional groups

We started out with the idea that species-specific networks involve different modes of intentionality.

Arguably, ideas from intentionality matters because it is a lurking variables that lead to different dynamics. 

Lets think about masking and contagion.

Assume that people cluster by political ideology.

We are modeling groups not individuals. 

In the context of political polarization, groups, or cliques, can choose to adopt or not masking depending on how the perception of what the other groups are doing. 

Finally assume that individual units are allowed to rewire to other groups, but this is costly.

In the context of strong group identity based on ideological conformity, we might see some rewiring. Groups composition will change, impacting how in each group adoption of masking, in turn influence the transmission probability. 

In the context of 'WE > me', that is, within groups of individuals are willing to enforce particular views by all necessary means, we might have a very different outcome.

Same set-up, different notion of intentionality influencing how persistent groups with institutional reality might unfold. As such, this example is not simply reducible to duelling contagion (maybe it could, but unclear why), or to the definition of groups as many-body interactions.

<style>
  .image {
    margin-top: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 6px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
</style>
