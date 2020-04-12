/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const convertToId = (str) => {
  return [...str].sort().join();
};

const groupAnagrams = (strs) => {
  const anagramMap = new Map();

  strs.forEach((str) => {
    const id = convertToId(str);
    const currentAnagrams = anagramMap.get(id) || [];
    anagramMap.set(id, [...currentAnagrams, str]);
  });

  const groups = [];
  anagramMap.forEach((group) => groups.push(group));

  return groups;
};
