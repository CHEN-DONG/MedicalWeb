window.onload = function () {
  $('.ui.card .image').dimmer({
    on: 'hover'
  });
  $('.menu .item').tab();
  $('.ui.calendar').calendar({
    type: "date",
    formatter: {
      date: function (date, settings) {
        if (!date) return '';
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return year + '-' + month + '-' + day;
      }
    }
  });
  $('.ui.dropdown').dropdown();
}