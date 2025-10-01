let videos = [];

function addVideo() {
    const urlInput = document.getElementById("videoUrl");
    const url = urlInput.value.trim();
    if (!url) return;

    videos.push({ url: url, likes: 0 });
    urlInput.value = "";
    renderVideos();
}

function likeVideo(index) {
    videos[index].likes += 1;
    renderVideos();
}

function renderVideos() {
    const videoList = document.getElementById("videoList");
    videoList.innerHTML = "";

    videos.forEach((v, i) => {
        const videoDiv = document.createElement("div");
        videoDiv.className = "video-item";

        const iframe = document.createElement("iframe");
        iframe.width = "100%";
        iframe.height = "200";
        iframe.src = v.url.replace("watch?v=", "embed/");
        iframe.allowFullscreen = true;

        const likeBtn = document.createElement("button");
        likeBtn.innerText = `❤️ لائک ${v.likes}`;
        likeBtn.style.marginTop = "5px";
        likeBtn.onclick = () => likeVideo(i);

        videoDiv.appendChild(iframe);
        videoDiv.appendChild(likeBtn);

        videoList.appendChild(videoDiv);
    });
}
