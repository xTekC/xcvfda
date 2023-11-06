use dioxus::prelude::*;

pub fn render_content<'a>(cx: &Scope<'a>) -> Element<'a> {
cx.render(rsx! {
    div {
        style: "flex: 1; width: 99%; margin: auto; max-height: 100%;", // Ensure the div does not overflow the flex container
        video {
            id: "cameraVideo",
            style: "width: 100%; height: auto; max-height: 100%; object-fit: fill;", // Adjust video sizing to be responsive within the flex item
            autoplay: true,
        }
    }
})
}
