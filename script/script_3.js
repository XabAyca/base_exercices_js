floor = prompt("Combien d'étages veux-tu pour ta pyramide ?")


for( count = 1; count <= floor; count++)
{
  console.log(" ".repeat(floor-count)+"#".repeat(count))
}