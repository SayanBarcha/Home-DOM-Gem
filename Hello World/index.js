const { div } = van.tags;

const addGem = (modClass) =>
  van.add(
    document.getElementById("holder"),
    div(
      { class: `shape ${modClass}` },
      div(
        { class: `shape shape-holder` },
        div(
          { class: "shape pyramid-1 pyr-1" },
          div(
            { class: "face-wrapper ft" },
            div({ class: "face" }, div({ class: "photon-shader" }))
          ),
          div(
            { class: "face-wrapper bk" },
            div({ class: "face" }, div({ class: "photon-shader" }))
          ),
          div(
            { class: "face-wrapper lt" },
            div({ class: "face" }, div({ class: "photon-shader" }))
          ),
          div(
            { class: "face-wrapper rt" },
            div({ class: "face" }, div({ class: "photon-shader" }))
          )
        ),
        div(
          { class: "shape cuboid-1 cub-1" },
          div({ class: "face ft" }, div({ class: "photon-shader" })),
          div({ class: "face bk" }, div({ class: "photon-shader" })),
          div({ class: "face rt" }, div({ class: "photon-shader" })),
          div({ class: "face lt" }, div({ class: "photon-shader" }))
        ),
        div(
          { class: "shape pyramid-2 pyr-2" },
          div(
            { class: "face-wrapper ft" },
            div({ class: "face" }, div({ class: "photon-shader" }))
          ),
          div(
            { class: "face-wrapper bk" },
            div({ class: "face" }, div({ class: "photon-shader" }))
          ),
          div(
            { class: "face-wrapper lt" },
            div({ class: "face" }, div({ class: "photon-shader" }))
          ),
          div(
            { class: "face-wrapper rt" },
            div({ class: "face" }, div({ class: "photon-shader" }))
          )
        )
      )
    )
  );

addGem("blue");
addGem("red");
addGem("green");
