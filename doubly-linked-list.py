class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None
        pass

class DoublyLinkedList:
    def __init__(self) -> None:
        self.head = None
        self.tail = None
    
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.prev = self.tail
            self.tail.next = new_node
            self.tail = new_node

    
    def print_reverse(self):
        if not self.tail:
            print("No values within this list")
        else:
            current_node = self.tail
            while current_node != None:
                print(current_node.data)
                current_node = current_node.prev

dllist = DoublyLinkedList()
dllist.append(12)
dllist.append(42)
dllist.append(52)
dllist.append(10)

dllist.print_reverse()
