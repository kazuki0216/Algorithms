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

llist = LinkedList()
first_node = Node(1)
llist.head = first_node

second_node = Node(2)
third_node = Node(3)
fourth_node = Node(4)

first_node.next = second_node
second_node.next = third_node
third_node.next = fourth_node

print(llist.print_all())

