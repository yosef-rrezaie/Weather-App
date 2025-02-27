function getWindDirection(degree) {
  if (degree >= 337.5 || degree < 22.5) return "شمال (N)";
  if (degree >= 22.5 && degree < 67.5) return "شمال‌شرق (NE)";
  if (degree >= 67.5 && degree < 112.5) return "شرق (E)";
  if (degree >= 112.5 && degree < 157.5) return "جنوب‌شرق (SE)";
  if (degree >= 157.5 && degree < 202.5) return "جنوب (S)";
  if (degree >= 202.5 && degree < 247.5) return "جنوب‌غرب (SW)";
  if (degree >= 247.5 && degree < 292.5) return "غرب (W)";
  if (degree >= 292.5 && degree < 337.5) return "شمال‌غرب (NW)";
  return "نامشخص";
}

export default getWindDirection