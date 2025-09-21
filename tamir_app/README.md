# Araç Takip ve Bakım Sistemi 🚗

Modern ve kullanıcı dostu araç takip sistemi. Tamirhaneler için geliştirilmiş web tabanlı çözüm.

## 🎯 Özellikler

### 👤 Müşteri Paneli
- **Araç Durumu Sorgulama**: Takip numarası veya telefon ile sorgulama
- **Anlık Takip**: Gerçek zamanlı durum güncellemeleri
- **Süreç Timeline**: Kabul'den teslime kadar tüm aşamalar
- **Maliyet Bilgisi**: Detaylı fiyat hesaplama
- **7/24 Erişim**: İstediğiniz zaman kontrol edin

### ⚙️ Admin Paneli
- **Araç Kayıt Sistemi**: Yeni müşteri ve araç kayıtları
- **Durum Yönetimi**: Beklemede → Onarımda → Tamamlandı
- **Müşteri Yönetimi**: Arama, listeleme, güncelleme
- **Raporlama**: Günlük/aylık istatistikler
- **Takip Numarası**: Otomatik oluşturma sistemi

## 🚀 Demo

### Müşteri Girişi
- **Takip No:** `TK2025001`
- **Telefon:** `05551234567`

### Admin Girişi
- **Kullanıcı:** `admin`
- **Şifre:** `admin123`

## 💻 Kullanım

1. `index.html` dosyasını tarayıcıda açın
2. "Araç Durumu Sorgula" ile müşteri paneline girin
3. Demo bilgilerle test edin

## 🎨 Teknolojiler

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Modern responsive design
- **Veri**: LocalStorage (demo için)
- **Tema**: Beyaz-gri-mavi-siyah minimal palet

## 📁 Proje Yapısı

```
tamir_app/
├── index.html          # Ana sayfa
├── login.html          # Giriş sayfası
├── admin/
│   └── panel.html      # Yönetim paneli
├── musteri/
│   └── dashboard.html  # Müşteri paneli
├── css/
│   └── style.css       # Tüm stiller
└── js/
    ├── auth.js         # Giriş sistemi
    └── main.js         # Ana JavaScript
```

## 🔧 Özellik Detayları

### İş Akışı
1. **Müşteri gelir** → Admin kayıt oluşturur
2. **Takip numarası üretilir** (TK2025XXX)
3. **Müşteri takip no ile giriş yapar**
4. **Admin durum günceller**
5. **Müşteri anlık görür**

### Durum Aşamaları
- 🟡 **Beklemede**: Araç kabul edildi, sırada bekliyor
- 🔵 **Onarımda**: Aktif çalışma devam ediyor
- 🟢 **Tamamlandı**: İş bitti, teslime hazır

## 📱 Responsive Design

✅ Masaüstü
✅ Tablet  
✅ Mobil

## 🔐 Güvenlik

- Session tabanlı giriş kontrolü
- Sayfa erişim koruması
- Kullanıcı rolü bazlı yetkilendirme

## 🎯 Hedef Kitle

- Küçük/orta ölçekli tamirhaneler
- Araç servisleri
- Müşteri memnuniyeti odaklı işletmeler

---

**Geliştirici:** bkrsahin  
**Tarih:** Eylül 2025  
**Lisans:** MIT

🔗 **Demo:** [GitHub Pages üzerinden yakında...]
