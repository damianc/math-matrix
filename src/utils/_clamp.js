export default function _clamp(val,min,max) {
  return Math.max(
    Math.min(val, max),
    min
  );
}
