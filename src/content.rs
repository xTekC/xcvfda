use dioxus::prelude::*;

pub fn render_content<'a>(cx: &Scope<'a>) -> Element<'a> {
// cx.render(rsx! {
//     div {
//         style: "flex: 1; width: 99%; margin: auto; max-height: 100%;", // Ensure the div does not overflow the flex container
//         video {
//             id: "cameraVideo",
//             style: "width: 100%; height: auto; max-height: 100%; object-fit: fill;", // Adjust video sizing to be responsive within the flex item
//             autoplay: true,
//         }
//     }
// })
cx.render(rsx! {
    div {
        style: "flex: 1; width: 99%; margin: auto; position: relative;", // Adjust the container to have a relative position
        video {
            id: "cameraVideo",
            style: "width: 100%; height: auto; max-height: 80vh; object-fit: fill; position: absolute; top: 0; bottom: 0; left: 0; right: 0;", // Set the video to cover the container and position it absolutely within
            autoplay: true,
        }
    }
})
}
