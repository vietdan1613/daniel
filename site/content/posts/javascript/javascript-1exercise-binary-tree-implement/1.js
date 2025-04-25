class BinaryTree{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    getMaxDepth(node){
        if(node == null)
            return 0;
        let leftDepth = this.getMaxDepth(node.left);
        let rightDepth = this.getMaxDepth(node.right);
        return Math.max(leftDepth, rightDepth) + 1;
    }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

console.log(root.getMaxDepth(root));