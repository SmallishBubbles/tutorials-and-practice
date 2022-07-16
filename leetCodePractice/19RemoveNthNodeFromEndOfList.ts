// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:

    Input: head = [1,2,3,4,5], n = 2
    Output: [1,2,3,5]

Example 2:

    Input: head = [1], n = 1
    Output: []

Example 3:

    Input: head = [1,2], n = 1
    Output: [1]
 

Constraints:
    The number of nodes in the list is sz.
    1 <= sz <= 30
    0 <= Node.val <= 100
    1 <= n <= sz
*/


/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// optimization would be to have a fast and slow pointer
// fast pointer finds end of list
// slow pointer makes its way to nth from end
// go through list once rather than twice
// but either way the time complexity reduces to O(n)

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    
    // edge case empty list
    if (head == null) {
        return head;
    }
        
    let listLength : number = 0;
    let current : ListNode = head;
    let currentPosition : number = 1;
    
    // find end of list
    while (current.next) {
        current = current.next;
        currentPosition ++;
    }
    
    // set lenth and reset pointer to start
    listLength = currentPosition;
    currentPosition = 1;
    current = head;
    
    // if head needs to be removed
    if (listLength == n) {
        return head.next;
    }
    
    // go to node before the one that should be removed
    while (currentPosition < listLength - n) {
        current = current.next;
        currentPosition ++;
    }
    
    // move pointer to delete
    current.next = current.next.next;
    
    return head;
};