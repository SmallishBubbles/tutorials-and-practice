/*
Given the root of a binary tree, return the level order traversal of its nodes' values. 
(i.e., from left to right, level by level).
 

Example 1:

            (3)
           /  \
         (9)  (20)
              /  \
            (15) (7)

    Input: root = [3,9,20,null,null,15,7]
    Output: [[3],[9,20],[15,7]]


Example 2:

    Input: root = [1]
    Output: [[1]]


Example 3:

    Input: root = []
    Output: []
 

Constraints:

    The number of nodes in the tree is in the range [0, 2000].
    -1000 <= Node.val <= 1000
*/

// Definition for a binary tree node.
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
     }
 }

 function levelOrder(root: TreeNode | null): number[][] {
    
    // base / edge case
    if (root == null) {
        return [];
    }
    
    let nodeQueue : TreeNode[] = [root];
    
    let layerPosition = 0;
    let currentLayerSize = 1;
    let nextLayerSize = 0;
    
    let output : number[][] = [];    
        
    // while current layer size is > 0
    while (currentLayerSize > 0 && nodeQueue.length > 0) {
        // take from queue (shift)
        let current : TreeNode = nodeQueue.shift();
        
        // if we're starting a new layer
        // push a new empty array to the output
        if (output.length <= layerPosition) {
            output.push([]);
        }
        
        // add current value to output array in correct position
        output[layerPosition].push(current.val);

        // if left is present
            // add to queue
            // increment next layer size
        if (current.left) {
            nodeQueue.push(current.left);
            nextLayerSize ++;
        }
        
        // if right is present
            // add to queue
            // increment next layer size
        if (current.right) {
            nodeQueue.push(current.right);
            nextLayerSize++;
        }

        // decrement current layer size
        currentLayerSize--;
        
        // if current layer size is now zero
            // increment layer position
            // currentlayer size = next layer size
            // next layer size to zero
        if (currentLayerSize == 0) {
            layerPosition++;
            currentLayerSize = nextLayerSize;
            nextLayerSize = 0;
        }
    }
    
    
    return output;
};