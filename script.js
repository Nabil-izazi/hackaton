// Daftar menu warung
const produk = [
  {
    id: "ayam-goreng-kremes",
    nama: "Ayam Goreng Kremes",
    harga: 22000,
    kategori: "Andalan",
    keterangan: "Ayam crispy renyah, sambal bawang, dan nasi hangat.",
    gambar: "https://lh3.googleusercontent.com/grass-cs/AABkmLfjbQUL2KYWQT0Fnmr7LwxJw_O4mMgjymTpqHdaTMyAT3YQBSqri9cTYvrDjfteIrzJOfWBrCCUP3r13FJaGWNEQnWMl5AYprhrOGip9zhk4bpppwG8ffEUMSDBRDH0hd5NwMwxGsHYiAJL=w640-h640-n-k-no",
    badge: "Favorit"
  },
  {
    id: "nila-goreng-bakar",
    nama: "Nila Goreng / Bakar",
    harga: 23000,
    kategori: "Andalan",
    keterangan: "Ikan nila gurih, siap digoreng atau dibakar sesuai selera.",
    gambar: "https://lh3.googleusercontent.com/grass-cs/AABkmLcO7kDDnk3gI9u-FCyPBf6hcH0ezNejaWxwAMXh0S2k-dWTO64jMklPaI3eTFaNq4nwlST7WnpZrMVjYvnukyEir7gnvuI-0XNJkt_C-MclHOKnynFTi83045eTreg6T8-0g4GBoeMUE6JO=w640-h640-n-k-no",
    badge: "Top pick"
  },
  {
    id: "nasi-goreng-bejo",
    nama: "Nasi Goreng Bejo Joss",
    harga: 18000,
    kategori: "Nasi Goreng",
    keterangan: "Rasa gurih, telur mata sapi, dan acar yang segar.",
    gambar: "https://lh3.googleusercontent.com/grass-cs/AABkmLexD226at9F1XDasiFGP8jIsI8rYllxmPlk-SHf9dU3iueI2pDEprmRr6TrcDRvMW7eE_6Ibu96g4S2XYc2SABxA8DSsG9chdscq07aGlulTYeGNdE54T7KrS47FJ6BjqbeC4jR=w640-h640-n-k-no",
    badge: "Klasik"
  },
  {
    id: "pecel-lele",
    nama: "Pecel Lele",
    harga: 17000,
    kategori: "Geprek & Spesial",
    keterangan: "Lele goreng, sambal, lalap, dan nasi hangat.",
    gambar: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    badge: "Spesial"
  },
  {
    id: "sayur-lodeh",
    nama: "Sayur Lodeh",
    harga: 12000,
    kategori: "Sayur & Lauk",
    keterangan: "Sayur santan hangat dan merupakan pelengkap sempurna.",
    gambar: "https://lh3.googleusercontent.com/grass-cs/AABkmLe2eU51A0u-EpoocXOyiFphmVGkm4zzPa7lcTKXQopP-ZMkSdsbJTt6Q33bgawQTggUXFnHzUXlAPL-BcOt0N6D_tIjzgQ7SO2pOmMDeYsStcrxhlw_peuQQSAPDSKBfavMRarmkvTsF7VM=w640-h640-n-k-no",
    badge: "Sehat"
  },
  {
    id: "tahu-tempe",
    nama: "Tahu Tempe Bakar",
    harga: 14000,
    kategori: "Sayur & Lauk",
    keterangan: "Tahu dan tempe yang dibakar ala warung rumahan.",
    gambar: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    badge: "Lauk"
  },
  {
    id: "es-teh-manis",
    nama: "Es Teh Manis",
    harga: 5000,
    kategori: "Minuman",
    keterangan: "Segar dan pas untuk menemani hidangan hangat.",
    gambar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC909gLFFmX-51p_BopZrjbDwEjZyYv-yvBRVzHQ-aUw&s=10",
    badge: "Segar"
  },
  {
    id: "jeruk-panas",
    nama: "Jeruk Panas",
    harga: 7000,
    kategori: "Minuman",
    keterangan: "Minuman dingin berpadu rasa asam dan manis.",
    gambar:"https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
    badge: "Dingin"
  }
];

// Pesanan yang sedang dibuat
const keranjang = [];

// Mengubah angka menjadi format mata uang rupiah.
const formatRupiah = (harga) => "Rp" + harga.toLocaleString("id-ID");

// Menampilkan menu dari harga tertinggi ke terendah.
function tampilkanProduk() {
  const daftar = document.getElementById("daftar-produk");
  daftar.innerHTML = [...produk]
    .sort((a, b) => b.harga - a.harga)
    .map((item) => `
      <article class="kartu">
        <div class="foto">
          ${item.gambar ? `<img class="foto-gambar" src="${item.gambar}" alt="Foto ${item.nama}" loading="lazy">` : ""}
          <span class="foto-fallback" ${item.gambar ? "hidden" : ""}>Foto belum tersedia</span>
          <span class="badge">${item.badge}</span>
        </div>
        <h3>${item.nama}</h3>
        <p>${item.keterangan}</p>
        <div class="card-bottom">
          <p class="harga">${formatRupiah(item.harga)}</p>
          <button class="add-btn" type="button" data-id="${item.id}">+ Tambah</button>
        </div>
      </article>
    `)
    .join("");
}

// Menambahkan menu baru ke keranjang atau menambah jumlahnya jika sudah ada.
function tambahKeKeranjang(id) {
  const menu = produk.find((item) => item.id === id);
  const ada = keranjang.find((item) => item.id === id);
  if (ada) ada.jumlah++;
  else keranjang.push({ id: menu.id, nama: menu.nama, harga: menu.harga, jumlah: 1 });
  tampilkanKeranjang();
  tampilkanToast(`${menu.nama} ditambahkan ke keranjang`);
}

// Mengubah jumlah item dan menghapusnya saat jumlahnya mencapai nol.
function ubahJumlah(id, perubahan) {
  const menu = keranjang.find((item) => item.id === id);
  if (!menu) return;
  menu.jumlah += perubahan;
  if (!menu.jumlah) keranjang.splice(keranjang.indexOf(menu), 1);
  tampilkanKeranjang();
}

// Memperbarui daftar keranjang, jumlah item, total harga, dan tautan WhatsApp.
function tampilkanKeranjang() {
  const daftar = document.getElementById("daftar-keranjang");
  const jumlah = keranjang.reduce((sum, item) => sum + item.jumlah, 0);
  const total = keranjang.reduce((sum, item) => sum + item.harga * item.jumlah, 0);

  document.getElementById("label-jumlah").textContent = jumlah + " item";
  document.getElementById("jumlah-item-nav").textContent = jumlah;
  document.getElementById("total-harga").textContent = formatRupiah(total);
  daftar.innerHTML = keranjang.length ? keranjang.map((item) => `
    <div class="cart-line">
      <div>
        <div class="cart-line-name">${item.nama}</div>
        <div class="cart-line-sub">${formatRupiah(item.harga)} / pcs</div>
      </div>
      <div class="qty">
        <button type="button" data-aksi="kurang" data-id="${item.id}">−</button>
        <strong>${item.jumlah}</strong>
        <button type="button" data-aksi="tambah" data-id="${item.id}">+</button>
      </div>
      <strong>${formatRupiah(item.harga * item.jumlah)}</strong>
    </div>
  `).join("") : '<p class="cart-empty">Belum ada menu. Yuk, pilih dari katalog!</p>';
  perbaruiLinkWhatsApp();
}

// Menyusun rincian pesanan yang akan dikirim melalui WhatsApp.
function buatTeksPesanan() {
  if (!keranjang.length) return "";
  const nama = document.getElementById("nama-pemesan").value.trim() || "Pelanggan";
  const layanan = document.getElementById("jenis-layanan").value;
  const caraOlah = document.querySelector('input[name="olah"]:checked').value;
  const sambal = document.querySelector('input[name="sambal"]:checked').value;
  const daftarMenu = keranjang.map((item) => `- ${item.nama} x${item.jumlah}`).join("\n");
  const total = keranjang.reduce((sum, item) => sum + item.harga * item.jumlah, 0);

  return `Halo Bejo Joss, saya mau pesan:\n${daftarMenu}\n\nNama: ${nama}\nLayanan: ${layanan}\nCara olah: ${caraOlah}\nSambal: ${sambal}\nTotal: ${formatRupiah(total)}`;
}

// Membuat tautan WhatsApp dengan rincian pesanan yang sudah dienkode.
function perbaruiLinkWhatsApp() {
  const teksPesanan = buatTeksPesanan();
  const nomor = "https://wa.me/6287732617227";
  document.getElementById("kirim-wa").href = teksPesanan
    ? `${nomor}?text=${encodeURIComponent(teksPesanan)}`
    : nomor;
}

// Menampilkan notifikasi singkat di halaman.
function tampilkanToast(pesan) {
  const toast = document.getElementById("toast");
  toast.textContent = pesan;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

// Menentukan status warung berdasarkan waktu lokal perangkat.
function tampilkanStatusBuka() {
  const jam = new Date().getHours();
  const sedangBuka = jam >= 9 && jam < 20;
  const status = document.getElementById("status-buka");
  status.textContent = sedangBuka ? "Buka sekarang" : "Sedang tutup";
  status.style.color = sedangBuka ? "#16794b" : "#b42318";
}

// Menyiapkan tampilan awal serta aksi tombol dan formulir pemesanan.
function mulaiHalaman() {
  const daftarProduk = document.getElementById("daftar-produk");
  const daftarKeranjang = document.getElementById("daftar-keranjang");
  const formPesanan = document.querySelector(".order-card");

  tampilkanStatusBuka();
  tampilkanProduk();
  tampilkanKeranjang();

  // Event delegation menangani tombol tambah pada semua kartu menu.
  daftarProduk.addEventListener("click", (event) => {
    const tombol = event.target.closest(".add-btn");
    if (tombol) tambahKeKeranjang(tombol.dataset.id);
  });

  // Menampilkan teks pengganti jika gambar menu gagal dimuat.
  daftarProduk.addEventListener("error", (event) => {
    if (!event.target.matches(".foto-gambar")) return;
    event.target.remove();
    event.target.closest(".foto").querySelector(".foto-fallback").hidden = false;
  }, true);

  // Satu listener menangani tombol tambah dan kurang untuk seluruh item keranjang.
  daftarKeranjang.addEventListener("click", (event) => {
    const tombol = event.target.closest(".qty button");
    if (!tombol) return;
    ubahJumlah(tombol.dataset.id, tombol.dataset.aksi === "tambah" ? 1 : -1);
  });

  // Perbarui isi tautan WhatsApp saat detail pesanan berubah.
  formPesanan.addEventListener("input", perbaruiLinkWhatsApp);
  formPesanan.addEventListener("change", perbaruiLinkWhatsApp);

  // Cegah pengiriman saat keranjang masih kosong.
  document.getElementById("kirim-wa").addEventListener("click", (event) => {
    if (keranjang.length) return;
    event.preventDefault();
    tampilkanToast("Keranjang masih kosong");
  });
}

// Jalankan inisialisasi setelah berkas JavaScript dimuat.
mulaiHalaman();