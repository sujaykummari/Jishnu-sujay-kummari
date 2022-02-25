# these are the hard coded 20 different words
keywords=["bonfire","cardio","case","character","backfield","backhoeing","bechalking","blockading","becloaking","boldfacing","blockhead","bemocking","folkdance","goldfinch","kneidlach","befoaming","bifocaled","bleaching","flambeing","becalming"]

# this  where we give the input
key=input("input keyword : ")

# now this checks if the word is present in the our hard coded list of words.
#  if found it prints the keyword
# Then the status is found
# and the last prifix is done using the slicing operator
if key in keywords:
    print(f"keyword :{key}")
    print("status : found")
    print(f"prefix :{key[0:4]}")

else :
    print(f"keyword :{key}")
    print("status : not_found")
    print(f"prefix :not_applicable")
