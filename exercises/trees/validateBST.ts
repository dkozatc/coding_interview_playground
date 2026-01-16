
import { BSTNode } from "../../dataStructures/BSTree";

// Link https://leetcode.com/problems/validate-binary-search-tree/
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


function validate(root : BSTNode | null , min : number , max : number ) : boolean {
    if (!root) {
        return true;
    }

    if ( root.value >= max || root.value <= min) {
        return false;
    }

    return validate(root.left , min , root.value) && validate(root.right , root.value , max);
}

export function isValidBST(root: BSTNode | null): boolean {
    return validate(root, Number.NEGATIVE_INFINITY ,Number.POSITIVE_INFINITY)
};

