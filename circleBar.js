function CircleBar(e) {
  $(e)
    .circleProgress({ fill: { color: "#a66d98" } })
    .on("circle-animation-progress", function(_event, _progress, stepValue) {
      $(this)
        .find("strong")
        .text(String(parseInt(100 * stepValue)) + "%");
    });
}
CircleBar(".round");
