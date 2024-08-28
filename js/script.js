// Script

function submitForm() {
	// Ambil data dari form
    const name = document.getElementById('name').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('message').value.trim();

    // Validasi input
    if (!name || !dob || !gender || !message) {
        alert('Tolong diisi dengan benar!!');
        return; // Hentikan proses jika ada field yang kosong
		}
		
	// Ambil tanggal saat ini
	const currentDate = new Date().toLocaleDateString();
	
	// Tampilkan data di output
    document.getElementById('currentDate').textContent = currentDate;
    document.getElementById('outputName').textContent = name;
    document.getElementById('outputDob').textContent = dob;
    document.getElementById('outputGender').textContent = gender.value;
    document.getElementById('outputMessage').textContent = message;

    // Clear form (optional)
    document.getElementById('inputForm').reset();
}

// Set tanggal saat ini saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
	const currentDate = new Date().toLocaleDateString();
	document.getElementById('currentDate').textContent = currentDate;
});
