const isOverlapped = (x1 = 0, x2 = 0, x3 = 0, x4 = 0) => {
    const length1 = Math.abs(x1 - x2);
    const length2 = Math.abs(x3 - x4);
    const start1 = Math.min(x1, x2);
    const start2 = Math.min(x3, x4);
    // A dot cannot overlap another dot or another line...
    if (!length1 || !length2) return false;
    // We check whether the first or second line are closer to the origin of the axis
    return (start1 < start2) ? ((start1 + length1) > start2) : ((start2 + length2) > start1);
};

module.exports = isOverlapped;