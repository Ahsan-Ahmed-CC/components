import _ from 'lodash';
import { StyleSheet as Aphrodite } from 'aphrodite/no-important';

const { StyleSheet, css } = Aphrodite.extend([{
  selectorHandler: (selector: string, baseSelector: string, generateSubtreeStyles: (selector: string) => string): string|null => {
    const nestedTags: Array<string> = [];
    const selectors = selector.split(',');
    _.each(selectors, (subselector, key) => {
      if (selector[0] === '&') {
        const tag = key === 0 ? subselector.slice(1) : subselector;
        const nestedTag = generateSubtreeStyles(`${baseSelector} ${tag}`.replace(/ +(?= )/g, ''));
        nestedTags.push(nestedTag);
      }
    });
    return _.isEmpty(nestedTags) ? null : _.join(_.flattenDeep(nestedTags), ' ');
  }
}]);

export { StyleSheet, css };