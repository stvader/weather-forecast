import { block } from 'bem-cn';

export const bc = (blockName: string): any => block(blockName);
export const bcAnt = (getBlock: any) => (elemName?: string | string[]): string => {
  if (Array.isArray(elemName)) {
    return elemName.reduceRight((acc, cur) => getBlock(cur).mix(acc), '').toString();
  }

  return getBlock(elemName).toString();
};
// ant-design lib can't set bem-cn without type conversation
