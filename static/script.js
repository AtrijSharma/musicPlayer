$(() => {
  $("#kabir").click(() => {
    $("#list").empty()
    $("#list").append(
      $("<li>")
        .text("Bekhayali")
        .append(
          $("<button>")
            .text("▶")
            .click(() => {
              window.location.href = "https://gaana.com/song/bekhayali-1";
            })
        )
        .append(
          $("<button> ")
            .text("❎")
            .attr("class", "cross")
            .click((ev) => {
              $(ev.target).parent().remove();
            })
        )
        .append(
          $("<button>")
            .text("👇")
            .attr("class", "down")
            .click((ev) => {
              $(ev.target).parent().insertAfter($(ev.target).parent().next());
            })
        )
        .append(
          $("<button>")
            .text("👆")
            .attr("class", "up")
            .click((ev) => {
              $(ev.target).parent().insertBefore($(ev.target).parent().prev());
            })
        )
    );

    $("#list").append(
      $("<li>")
        .text("Tujhe Kitna Chahne Lage")
        .append(
          $("<button>")
            .text("▶")
            .click(() => {
              window.location.href =
                "https://gaana.com/song/tujhe-kitna-chahne-lage-remixremix-by-dj-chetas";
            })
        )
        .append(
          $("<button> ")
            .text("❎")
            .attr("class", "cross")
            .click((ev) => {
              $(ev.target).parent().remove();
            })
        )
        .append(
          $("<button>")
            .text("👇")
            .attr("class", "down")
            .click((ev) => {
              $(ev.target).parent().insertAfter($(ev.target).parent().next());
            })
        )
        .append(
          $("<button>")
            .text("👆")
            .attr("class", "up")
            .click((ev) => {
              $(ev.target).parent().insertBefore($(ev.target).parent().prev());
            })
        )
    );
    $("#list").append(
      $("<li>")
        .text("Tera Ban Jaunga")
        .append(
          $("<button>")
            .text("▶")
            .click(() => {
              window.location.href = "https://gaana.com/song/tera-ban-jaunga";
            })
        )
        .append(
          $("<button> ")
            .text("❎")
            .attr("class", "cross")
            .click((ev) => {
              $(ev.target).parent().remove();
            })
        )
        .append(
          $("<button>")
            .text("👇")
            .attr("class", "down")
            .click((ev) => {
              $(ev.target).parent().insertAfter($(ev.target).parent().next());
            })
        )
        .append(
          $("<button>")
            .text("👆")
            .attr("class", "up")
            .click((ev) => {
              $(ev.target).parent().insertBefore($(ev.target).parent().prev());
            })
        )
    );
    $("#list").append(
      $("<li>")
        .text("Mera Sohneya")
        .append(
          $("<button>")
            .text("▶")
            .click(() => {
              window.location.href = "https://gaana.com/song/mere-sohneya";
            })
        )
        .append(
          $("<button> ")
            .text("❎")
            .attr("class", "cross")
            .click((ev) => {
              $(ev.target).parent().remove();
            })
        )
        .append(
          $("<button>")
            .text("👇")
            .attr("class", "down")
            .click((ev) => {
              $(ev.target).parent().insertAfter($(ev.target).parent().next());
            })
        )
        .append(
          $("<button>")
            .text("👆")
            .attr("class", "up")
            .click((ev) => {
              $(ev.target).parent().insertBefore($(ev.target).parent().prev());
            })
        )
    );
  });
  $("#Dil").click(() => {
    $("#list").empty()
    $("#list")
      .append(
        $("<li>")
          .attr("class", "myli")
          .text("Dil - Bechara")
          .append(
            $("<button>")
              .text("▶")
              .click(() => {
                window.location.href = "https://gaana.com/song/dil-bechara";
              })
          )
          .append(
            $("<button> ")
              .text("❎")
              .attr("class", "cross")
              .click((ev) => {
                $(ev.target).parent().remove();
              })
          )
          .append(
            $("<button>")
              .text("👇")
              .attr("class", "down")
              .click((ev) => {
                $(ev.target).parent().insertAfter($(ev.target).parent().next());
              })
          )
          .append(
            $("<button>")
              .text("👆")
              .attr("class", "up")
              .click((ev) => {
                $(ev.target)
                  .parent()
                  .insertBefore($(ev.target).parent().prev());
              })
          )
      )
      .append(
        $("<li>")
          .attr("class", "myli")
          .text("Main-Tumhara")
          .append(
            $("<button>")
              .text("▶")
              .click(() => {
                window.location.href = "https://gaana.com/song/main-tumhara";
              })
          )
          .append(
            $("<button> ")
              .text("❎")
              .attr("class", "cross")
              .click((ev) => {
                $(ev.target).parent().remove();
              })
          )
          .append(
            $("<button>")
              .text("👇")
              .attr("class", "down")
              .click((ev) => {
                $(ev.target).parent().insertAfter($(ev.target).parent().next());
              })
          )
          .append(
            $("<button>")
              .text("👆")
              .attr("class", "up")
              .click((ev) => {
                $(ev.target)
                  .parent()
                  .insertBefore($(ev.target).parent().prev());
              })
          )
      )
      .append(
        $("<li>")
          .attr("class", "myli")
          .text("Khulke Jeene Ka")
          .append(
            $("<button>")
              .text("▶")
              .click(() => {
                window.location.href = "https://gaana.com/song/khulke-jeene-ka";
              })
          )
          .append(
            $("<button> ")
              .text("❎")
              .attr("class", "cross")
              .click((ev) => {
                $(ev.target).parent().remove();
              })
          )
          .append(
            $("<button>")
              .text("👇")
              .attr("class", "down")
              .click((ev) => {
                $(ev.target).parent().insertAfter($(ev.target).parent().next());
              })
          )
          .append(
            $("<button>")
              .text("👆")
              .attr("class", "up")
              .click((ev) => {
                $(ev.target)
                  .parent()
                  .insertBefore($(ev.target).parent().prev());
              })
          )
      )
      .append(
        $("<li>")
          .attr("class", "myli")
          .text("Taare Ginn")
          .append(
            $("<button>")
              .text("▶")
              .click(() => {
                window.location.href = "https://gaana.com/song/taare-ginn";
              })
          )
          .append(
            $("<button> ")
              .text("❎")
              .attr("class", "cross")
              .click((ev) => {
                $(ev.target).parent().remove();
              })
          )
          .append(
            $("<button>")
              .text("👇")
              .attr("class", "down")
              .click((ev) => {
                $(ev.target).parent().insertAfter($(ev.target).parent().next());
              })
          )
          .append(
            $("<button>")
              .text("👆")
              .attr("class", "up")
              .click((ev) => {
                $(ev.target)
                  .parent()
                  .insertBefore($(ev.target).parent().prev());
              })
          )
      );
  });

  $("#pp").click(() => {
    $("#list").empty()
    $("#list")
      .append(
        $("<li>")
          .attr("class", "myli")
          .text("Dheeme Dheeme")
          .append(
            $("<button>")
              .text("▶")
              .click(() => {
                window.location.href =
                  "https://gaana.com/song/dheeme-dheeme-from-pati-patni-aur-woh";
              })
          )
          .append(
            $("<button> ")
              .text("❎")
              .attr("class", "cross")
              .click((ev) => {
                $(ev.target).parent().remove();
              })
          )
          .append(
            $("<button>")
              .text("👇")
              .attr("class", "down")
              .click((ev) => {
                $(ev.target).parent().insertAfter($(ev.target).parent().next());
              })
          )
          .append(
            $("<button>")
              .text("👆")
              .attr("class", "up")
              .click((ev) => {
                $(ev.target)
                  .parent()
                  .insertBefore($(ev.target).parent().prev());
              })
          )
      )
      .append(
        $("<li>")
          .attr("class", "myli")
          .text("Ankhiyon Se Goli Mare")
          .append(
            $("<button>")
              .text("▶")
              .click(() => {
                window.location.href =
                  "https://gaana.com/song/ankhiyon-se-goli-mare-from-pati-patni-aur-woh";
              })
          )
          .append(
            $("<button> ")
              .text("❎")
              .attr("class", "cross")
              .click((ev) => {
                $(ev.target).parent().remove();
              })
          )
          .append(
            $("<button>")
              .text("👇")
              .attr("class", "down")
              .click((ev) => {
                $(ev.target).parent().insertAfter($(ev.target).parent().next());
              })
          )
          .append(
            $("<button>")
              .text("👆")
              .attr("class", "up")
              .click((ev) => {
                $(ev.target)
                  .parent()
                  .insertBefore($(ev.target).parent().prev());
              })
          )
      )
      .append(
        $("<li>")
          .attr("class", "myli")
          .text("Tu Hi Yaar Mera")
          .append(
            $("<button>")
              .text("▶")
              .click(() => {
                window.location.href =
                  "https://gaana.com/song/tu-hi-yaar-mera-from-pati-patni-aur-woh";
              })
          )
          .append(
            $("<button> ")
              .text("❎")
              .attr("class", "cross")
              .click((ev) => {
                $(ev.target).parent().remove();
              })
          )
          .append(
            $("<button>")
              .text("👇")
              .attr("class", "down")
              .click((ev) => {
                $(ev.target).parent().insertAfter($(ev.target).parent().next());
              })
          )
          .append(
            $("<button>")
              .text("👆")
              .attr("class", "up")
              .click((ev) => {
                $(ev.target)
                  .parent()
                  .insertBefore($(ev.target).parent().prev());
              })
          )
      )
      .append(
        $("<li>")
          .attr("class", "myli")
          .text("Dilbara")
          .append(
            $("<button>")
              .text("▶")
              .click(() => {
                window.location.href =
                  "https://gaana.com/song/dilbara-from-pati-patni-aur-woh";
              })
          )
          .append(
            $("<button> ")
              .text("❎")
              .attr("class", "cross")
              .click((ev) => {
                $(ev.target).parent().remove();
              })
          )
          .append(
            $("<button>")
              .text("👇")
              .attr("class", "down")
              .click((ev) => {
                $(ev.target).parent().insertAfter($(ev.target).parent().next());
              })
          )
          .append(
            $("<button>")
              .text("👆")
              .attr("class", "up")
              .click((ev) => {
                $(ev.target)
                  .parent()
                  .insertBefore($(ev.target).parent().prev());
              })
          )
      );
  });
  $("#kd").click(() => {
    $("#list").empty()
    $("#list")
      .append(
        $("<li>")
          .attr("class", "myli")
          .text("Namo Namo")
          .append(
            $("<button>")
              .text("▶")
              .click(() => {
                window.location.href = "https://gaana.com/song/namo-namo-56";
              })
          )
          .append(
            $("<button> ")
              .text("❎")
              .attr("class", "cross")
              .click((ev) => {
                $(ev.target).parent().remove();
              })
          )
          .append(
            $("<button>")
              .text("👇")
              .attr("class", "down")
              .click((ev) => {
                $(ev.target).parent().insertAfter($(ev.target).parent().next());
              })
          )
          .append(
            $("<button>")
              .text("👆")
              .attr("class", "up")
              .click((ev) => {
                $(ev.target)
                  .parent()
                  .insertBefore($(ev.target).parent().prev());
              })
          )
      )
      .append(
        $("<li>")
          .attr("class", "myli")
          .text("Sweetheart")
          .append(
            $("<button>")
              .text("▶")
              .click(() => {
                window.location.href = "https://gaana.com/song/sweetheart-206";
              })
          )
          .append(
            $("<button> ")
              .text("❎")
              .attr("class", "cross")
              .click((ev) => {
                $(ev.target).parent().remove();
              })
          )
          .append(
            $("<button>")
              .text("👇")
              .attr("class", "down")
              .click((ev) => {
                $(ev.target).parent().insertAfter($(ev.target).parent().next());
              })
          )
          .append(
            $("<button>")
              .text("👆")
              .attr("class", "up")
              .click((ev) => {
                $(ev.target)
                  .parent()
                  .insertBefore($(ev.target).parent().prev());
              })
          )
      )
      .append(
        $("<li>")
          .attr("class", "myli")
          .text("Qaafirana")
          .append(
            $("<button>")
              .text("▶")
              .click(() => {
                window.location.href = "https://gaana.com/song/qaafirana-1";
              })
          )
          .append(
            $("<button> ")
              .text("❎")
              .attr("class", "cross")
              .click((ev) => {
                $(ev.target).parent().remove();
              })
          )
          .append(
            $("<button>")
              .text("👇")
              .attr("class", "down")
              .click((ev) => {
                $(ev.target).parent().insertAfter($(ev.target).parent().next());
              })
          )
          .append(
            $("<button>")
              .text("👆")
              .attr("class", "up")
              .click((ev) => {
                $(ev.target)
                  .parent()
                  .insertBefore($(ev.target).parent().prev());
              })
          )
      )
      .append(
        $("<li>")
          .attr("class", "myli")
          .text("Jaan-Nisaar")
          .append(
            $("<button>")
              .text("▶")
              .click(() => {
                window.location.href =
                  "https://gaana.com/song/jaan-nisaar-arijit";
              })
          )
          .append(
            $("<button> ")
              .text("❎")
              .attr("class", "cross")
              .click((ev) => {
                $(ev.target).parent().remove();
              })
          )
          .append(
            $("<button>")
              .text("👇")
              .attr("class", "down")
              .click((ev) => {
                $(ev.target).parent().insertAfter($(ev.target).parent().next());
              })
          )
          .append(
            $("<button>")
              .text("👆")
              .attr("class", "up")
              .click((ev) => {
                $(ev.target)
                  .parent()
                  .insertBefore($(ev.target).parent().prev());
              })
          )
      );
  });
});
