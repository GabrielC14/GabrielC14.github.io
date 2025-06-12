document.getElementById('btn-confirmar').addEventListener('click', () => {
  document.getElementById('form').style.display = 'flex';
  document.getElementById('btn-confirmar').style.display = 'none';
});

document.getElementById('telefone').addEventListener('input', (e) => {
  let v = e.target.value.replace(/\D/g, '');

  if (v.length > 11) v = v.slice(0, 11);

  if (v.length >= 2 && v.length <= 6) {
    v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
  } else if (v.length > 6 && v.length <= 10) {
    v = `(${v.slice(0, 2)}) ${v.slice(2, 3)} ${v.slice(3, 7)}-${v.slice(7)}`;
  } else if (v.length === 11) {
    v = `(${v.slice(0, 2)}) ${v.slice(2, 3)} ${v.slice(3, 7)}-${v.slice(7)}`;
  }

  e.target.value = v;
});

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const telefoneLimpo = telefone.replace(/\D/g, '');

  if (!nome || telefoneLimpo.length !== 11 || telefoneLimpo[2] !== '9') {
    alert("Por favor, insira um número de WhatsApp válido com DDD (ex: (41) 9 9123-4567).");
    return;
  }

const formData = new FormData();
formData.append("nome", nome);
formData.append("telefone", telefone);

fetch("https://script.google.com/macros/s/AKfycbxVDTb1M-Lg_eWG_F8RhPJ80tT1RLSGHEzBq2ghNEHHxxcidm1JBSIRZjKKM4K8BYrJ/exec", {
  method: "POST",
  body: formData,
})
.then(() => {
  document.getElementById('form').style.display = 'none';
  document.getElementById('sucesso').style.display = 'flex';
})
.catch(() => {
  alert("Erro ao enviar. Tente novamente.");
});
});

const video = document.getElementById('bg-video');
video.playbackRate = 0.4;