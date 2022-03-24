





// For elevation range
  var elevationRange = document.querySelector('input[name="elevationRange"]'),
      elevationRangeLower = document.querySelector('input[name="elevationRangeLower"]'),
      outRangeUpperE = document.querySelector('.outRangeUpperE'),
      outRangeLowerE = document.querySelector('.outRangeLowerE'),
      inclRangeE = document.querySelector('.incl-rangeE'),
      updateViewE = function () {
        if (this.getAttribute('name') === 'elevationRange') {
          outRangeUpperE.innerHTML = this.value;
          outRangeUpperE.style.left = this.value / this.getAttribute('max') * 100 + '%';
        } else {
          outRangeLowerE.style.left = this.value / this.getAttribute('max') * 100 + '%';
          outRangeLowerE.innerHTML = this.value
        }
        if (parseInt(elevationRange.value) > parseInt(elevationRangeLower.value)) {
          inclRangeE.style.width = (elevationRange.value - elevationRangeLower.value) / this.getAttribute('max') * 100 + '%';
          inclRangeE.style.left = elevationRangeLower.value / this.getAttribute('max') * 100 + '%';
        } else {
          inclRangeE.style.width = (elevationRangeLower.value - elevationRange.value) / this.getAttribute('max') * 100 + '%';
          inclRangeE.style.left = elevationRange.value / this.getAttribute('max') * 100 + '%';
        }
      };

    document.addEventListener('DOMContentLoaded', function () {
      updateViewE.call(elevationRange);
      updateViewE.call(elevationRangeLower);
      $('input[type="range"]').on('mouseup', function() {
        this.blur();
      }).on('mousedown input', function () {
        updateViewE.call(this);
      });
    });



//For miles range
  var mileRange = document.querySelector('input[name="mileRange"]'),
      mileRangeLower = document.querySelector('input[name="mileRangeLower"]'),
      outRangeUpper = document.querySelector('.outRangeUpper'),
      outRangeLower = document.querySelector('.outRangeLower'),
      inclRange = document.querySelector('.incl-range'),
      updateView = function () {
        if (this.getAttribute('name') === 'mileRange') {
          outRangeUpper.innerHTML = this.value;
          outRangeUpper.style.left = this.value / this.getAttribute('max') * 100 + '%';
        } else {
          outRangeLower.style.left = this.value / this.getAttribute('max') * 100 + '%';
          outRangeLower.innerHTML = this.value
        }
        if (parseInt(mileRange.value) > parseInt(mileRangeLower.value)) {
          inclRange.style.width = (mileRange.value - mileRangeLower.value) / this.getAttribute('max') * 100 + '%';
          inclRange.style.left = mileRangeLower.value / this.getAttribute('max') * 100 + '%';
        } else {
          inclRange.style.width = (mileRangeLower.value - mileRange.value) / this.getAttribute('max') * 100 + '%';
          inclRange.style.left = mileRange.value / this.getAttribute('max') * 100 + '%';
        }
      };

    document.addEventListener('DOMContentLoaded', function () {
      updateView.call(mileRange);
      updateView.call(mileRangeLower);
      $('input[type="range"]').on('mouseup', function() {
        this.blur();
      }).on('mousedown input', function () {
        updateView.call(this);
      });
    });










//
