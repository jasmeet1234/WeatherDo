#Square Root
import math
a=int(input("Enter the number\n"))
print(F"Square Root of {a} : {math.sqrt(a)}")

#Add
x=list(map(int, input("enter the numbers\n").split(' ')))
print(F"Sum: {sum(x)}")
 
#triangle
x=list(map(int, input("enter the side of triangle\n").split(' ')))
s=sum(x)/2
print(F"Area: {math.sqrt(s*(s-x[0])*(s-x[1])*(s-x[2]))}")