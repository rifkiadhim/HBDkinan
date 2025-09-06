const message = `Iikann kinan hari ini ultahh, wkwkwkwk \n\nHAPPY LEVEL UP DAY \n\nReminder \nKerja tuh kadang kayak drama korea: banyak plot twist, ada yang ngeselin, ada yang bikin happy ending… bedanya, episode-nya nggak kelar-kelar. Tapi kau yang jadi pemeran utamanya! \n\nW Y A T B`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    const signature = document.querySelector(".signature");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      } else {
        // setelah teks selesai baru munculkan tanda tangan
        setTimeout(() => {
          signature.style.opacity = 1;
        }, 500);
      }
    }

    typeWriter();
  }, 600);
}
