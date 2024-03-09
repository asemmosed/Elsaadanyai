const api = "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";
const inp = document.getElementById('inp');
const images = document.querySelector('.images');

const getImage = async () => {
  const methods = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "authorization": `Bearer ${api}` // تصحيح الخطأ هنا
    },
    body: JSON.stringify({
      "prompt": inp.value,
      "n": 4,
      "size": "512x512"
    })
  };

  try {
    const res = await fetch("https://api.openai.com/v1/images/generations", methods);
    const data = await res.json();
    console.log(data);

    const listImages = data.data;
    images.innerHTML = '';

    listImages.forEach(photo => {
      const container = document.createElement("div");
      images.append(container);
      const img = document.createElement("img");
      container.append(img);
      img.src = photo.url;
    });
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};
