// Giriş sistemi yönetimi
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const userType = document.getElementById('userType').value;
            
            if (userType === 'admin') {
                handleAdminLogin();
            } else {
                handleCustomerLogin();
            }
        });
    }
});

// Admin giriş işlemi
function handleAdminLogin() {
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;
    
    // Demo admin hesabı
    if (username === 'admin' && password === 'admin123') {
        showMessage('Admin girişi başarılı! Yönlendiriliyorsunuz...', 'success');
        
        sessionStorage.setItem('userType', 'admin');
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('isLoggedIn', 'true');
        
        setTimeout(() => {
            window.location.href = 'admin/panel.html';
        }, 1000);
    } else {
        showMessage('Admin kullanıcı adı veya şifre hatalı!', 'error');
    }
}

// Müşteri giriş işlemi
function handleCustomerLogin() {
    const trackingNumber = document.getElementById('trackingNumber').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    
    if (!trackingNumber && !phoneNumber) {
        showMessage('Takip numarası veya telefon numarası girmelisiniz!', 'error');
        return;
    }
    
    // Demo müşteri verileri (gerçek uygulamada backend'den gelir)
    const customerRecords = [
        {
            trackingNumber: 'TK2025001',
            phone: '05551234567',
            customerName: 'Ahmet Yılmaz',
            vehicleData: {
                plate: '34 ABC 123',
                model: 'Honda Civic 2018',
                problem: 'Fren sistemi arızası',
                status: 'Onarımda',
                statusIcon: '🔧',
                currentOperation: 'Fren balata değişimi',
                estimatedDelivery: '22.09.2025',
                registerDate: '15.09.2025',
                arrivalDate: '15.09.2025',
                lastUpdate: '21.09.2025 - 14:30'
            },
            costData: {
                laborCost: '800 ₺',
                partsCost: '450 ₺',
                totalCost: '1,250 ₺',
                paymentStatus: 'Bekliyor',
                paymentMethod: 'Teslimde Nakit/Kart'
            }
        },
        {
            trackingNumber: 'TK2025002',
            phone: '05559876543',
            customerName: 'Fatma Demir',
            vehicleData: {
                plate: '35 XYZ 789',
                model: 'Toyota Corolla 2020',
                problem: 'Motor yağ değişimi',
                status: 'Tamamlandı',
                statusIcon: '✅',
                currentOperation: 'İşlem tamamlandı',
                estimatedDelivery: 'Teslime hazır',
                registerDate: '18.09.2025',
                arrivalDate: '18.09.2025',
                lastUpdate: '19.09.2025 - 16:00'
            },
            costData: {
                laborCost: '200 ₺',
                partsCost: '180 ₺',
                totalCost: '380 ₺',
                paymentStatus: 'Ödendi',
                paymentMethod: 'Kredi Kartı'
            }
        }
    ];
    
    // Müşteri arama
    let foundCustomer = null;
    
    if (trackingNumber) {
        foundCustomer = customerRecords.find(record => 
            record.trackingNumber.toLowerCase() === trackingNumber.toLowerCase()
        );
    } else if (phoneNumber) {
        foundCustomer = customerRecords.find(record => 
            record.phone.replace(/\s/g, '') === phoneNumber.replace(/\s/g, '')
        );
    }
    
    if (foundCustomer) {
        showMessage('Araç kaydınız bulundu! Yönlendiriliyorsunuz...', 'success');
        
        // Müşteri verilerini sakla
        sessionStorage.setItem('userType', 'customer');
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('customerData', JSON.stringify(foundCustomer));
        
        setTimeout(() => {
            window.location.href = 'musteri/dashboard.html';
        }, 1000);
    } else {
        showMessage('Araç kaydı bulunamadı! Takip numaranızı veya telefon numaranızı kontrol edin.', 'error');
    }
}

// Mesaj gösterme fonksiyonu
function showMessage(message, type) {
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
        ${type === 'success' ? 'background: #4CAF50;' : 'background: #f44336;'}
    `;
    
    if (!document.querySelector('#messageStyle')) {
        const style = document.createElement('style');
        style.id = 'messageStyle';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 4000);
}

// Sayfa koruması (admin ve müşteri panelleri için)
function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const userType = sessionStorage.getItem('userType');
    
    if (!isLoggedIn) {
        showMessage('Bu sayfaya erişim için giriş yapmalısınız!', 'error');
        setTimeout(() => {
            window.location.href = '../login.html';
        }, 2000);
        return false;
    }
    
    return { userType, username: sessionStorage.getItem('username') };
}

// Çıkış fonksiyonu
function logout() {
    sessionStorage.clear();
    showMessage('Çıkış yapıldı!', 'success');
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 1000);
}
