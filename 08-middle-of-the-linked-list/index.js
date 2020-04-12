/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var getByIdx = (head, idx) => {
  let result = head;

  while (idx > 0) {
    result = result.next;
    idx--;
  }

  return result;
};

var middleNode = function (head) {
  let n = 1;
  let current = head;

  while (current.next) {
    n++;
    current = current.next;
  }

  let half = Math.ceil((n - 1) / 2);

  return getByIdx(head, half);
};
