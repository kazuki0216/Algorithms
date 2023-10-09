class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def print_all(self):
        current_node = self.head
        while current_node.next != None:
            print(current_node.data)
            current_node = current_node.next
    
    def print_last(self):
        if not self.head:
            print("There are no values.")
        else:
            current_node = self.head
            while current_node.next != None:
                current_node = current_node.next
                if current_node.next == None:
                    return current_node.data
    
    def reverse_list(self):
        if not self.head:
            print("There are no values.")
            return
        else:
           previous = None
           current = self.head
           while current is not None:
               next_node = current.next
               current.next = previous
               previous = current
               current = next_node
        self.head = previous
        print(self.head.data)



llist = LinkedList()
first_node = Node("a")
llist.head = first_node

second_node = Node("b")
third_node = Node("c")
fourth_node = Node("This is the last value bitch")

first_node.next = second_node
second_node.next = third_node
third_node.next = fourth_node

print(llist.reverse_list())



"""
we know the head of the list already. 
1. We have to get to the end of the list. 
2. When we find the end, we will set the end value as the head. 
3. We start setting the next values to the heads previous value. !!! 
    we could keep a track of how many time we traversed a list by incrementing an index variable by one for each iteration 
    then we will create another while loop that will iterate until the index hits 0. 
    If the next value is None(the end of the list)
        Start another loop 

"""

"""
    1. keep track of the next Node(curr.next) before making adjustments to it. 
    2. point the curr.next to the previous node(global variable)
    3. point the previous to the current node, so that in the next iteration, it is the previous. 
    4. point the current to the next node so that in the next iteration, it will point to next.
        The first step keeps track of what the next node is even though it has been mutated.
"""