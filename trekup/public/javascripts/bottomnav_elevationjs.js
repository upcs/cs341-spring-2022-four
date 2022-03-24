// For elevation range
// var elevationRange = document.querySelector('input[name="elevationRange"]'),
//     elevationRangeLower = document.querySelector('input[name="elevationRangeLower"]'),
//     outRangeUpperE = document.querySelector('.outRangeUpperE'),
//     outRangeLowerE = document.querySelector('.outRangeLowerE'),
//     inclRangeE = document.querySelector('.incl-rangeE'),
//     updateView = function () {
//       if (this.getAttribute('name') === 'elevationRange') {
//         outRangeUpperE.innerHTML = this.value;
//         outRangeUpperE.style.left = this.value / this.getAttribute('max') * 100 + '%';
//       } else {
//         outRangeLowerE.style.left = this.value / this.getAttribute('max') * 100 + '%';
//         outRangeLowerE.innerHTML = this.value
//       }
//       if (parseInt(elevationRange.value) > parseInt(elevationRangeLower.value)) {
//         inclRangeE.style.width = (elevationRange.value - elevationRangeLower.value) / this.getAttribute('max') * 100 + '%';
//         inclRangeE.style.left = elevationRangeLower.value / this.getAttribute('max') * 100 + '%';
//       } else {
//         inclRangeE.style.width = (elevationRangeLower.value - elevationRange.value) / this.getAttribute('max') * 100 + '%';
//         inclRangeE.style.left = elevationRange.value / this.getAttribute('max') * 100 + '%';
//       }
//     };
//
//   document.addEventListener('DOMContentLoaded', function () {
//     updateView.call(elevationRange);
//     updateView.call(elevationRangeLower);
//     $('input[type="range"]').on('mouseup', function() {
//       this.blur();
//     }).on('mousedown input', function () {
//       updateView.call(this);
//     });
//   });
