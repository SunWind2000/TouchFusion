/**
 * 检查节点是否是父节点的子节点
 * @param node 
 * @param parent 
 * @returns 
 */
export const hasParentNode = (node: HTMLElement, parent: HTMLElement): boolean => {
  while (node) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode as HTMLElement;
  }
  return false;
};
