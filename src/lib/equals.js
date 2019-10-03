export default function equals(comparator, comparitee) {
  try {
    let regex = new RegExp(comparator);
    return regex.test(comparitee);
  } catch(e) {
    return false;
  }
}