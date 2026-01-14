//------BIG THANKS TO SISTRO FOR THIS !!!!!--------

var LoadedMSG = "Payload đã được nạp!";

var getPayload = function(payload, onLoadEndCallback) {
  var req = new XMLHttpRequest();
  req.open('GET', payload);
  req.send();
  req.responseType = "arraybuffer";
  req.onload = function (event) {
      if (onLoadEndCallback) onLoadEndCallback(req, event);
  };
}

var sendPayload = function(url, data, onLoadEndCallback) {
  var req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.send(data);

  req.onload = function (event) {
      if (onLoadEndCallback) onLoadEndCallback(req, event);
  };
}

//Load payloads with GoldHEN

function Loadpayloadlocal(PLfile){ //Loading Payload via Payload Param.
    var PS4IP = "127.0.0.1";

	// First do an initial check to see if the BinLoader server is running, ready or busy.
	var req = new XMLHttpRequest();
    if (PS4IP == "127.0.0.1") {
      req.open("POST", `http://${PS4IP}:9090/status`);
    } else {
      req.open("GET", `http://${PS4IP}:9090/status`);
    }
		req.send();
		req.onerror = function(){
			console.log("BinLoader chưa được chạy, đang thử tải payload online...");
            Loadpayloadonline(PLfile);
			return;
		};
		req.onload = function(){
			var responseJson = JSON.parse(req.responseText);
			if (responseJson.status=="ready"){
		    getPayload(PLfile, function (req) {
				if ((req.status === 200 || req.status === 304) && req.response) {
				    //Sending bins via IP POST Method
                    sendPayload(`http://${PS4IP}:9090`, req.response, function (req) {
                        if (req.status === 200) {
                            //alert("Payload đã được gửi !");
                        }else{
                            console.log('Không gửi được payload, đang thử tải payload online...');
                            setTimeout(() => {
                                Loadpayloadonline(PLfile);
                            }, 3000); // 3 seconds delay
                            return;
                        }
                    })
                }
			});
			} else {
				alert("Không thể tải Payload vì BinLoader đang bận");
				return;
		  }
	  };
  }

//--------------------------------------------------

//------Payloads--------

// Load Payloads with exploit

function Loadpayloadonline(PLfile) {
    window.payload_path = PLfile;
    // If we have access to toogle_payload from lapse.js, use it
    if (typeof window.toogle_payload === 'function') {
        window.toogle_payload(PLfile);
    } else {
        console.log('Payload đã được đặt để tải sau khi exploit: ' + PLfile);
    }
}

// PSFree Fix

function load_PSFreeFix(){
    const Confirmation = confirm("Bạn có chắc chắn muốn nạp payload PSFree Fix không?");
    if (Confirmation) {
        // First try local loading through GoldHen
        Loadpayloadlocal("./payloads/ps4-psfree-fix.bin");
        
        // Also show loading message
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "PSFree Fix Payload đã được nạp!";
        }
    }
}

// App2USB - Transfer Apps to USB
function load_app2usb(){
    const Confirmation = confirm("Nạp payload App2USB? Payload này cho phép chuyển ứng dụng sang USB.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/app2usb.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "App2USB Payload đã được nạp!";
        }
    }
}

// AppCache Install
function load_appcache_install(){
    const Confirmation = confirm("Nạp payload AppCache Install?");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/appcache-install.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "AppCache Install Payload đã được nạp!";
        }
    }
}

// Backup
function load_backup(){
    const Confirmation = confirm("Nạp payload Backup? Payload này sẽ sao lưu dữ liệu hệ thống.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/backup.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Backup Payload đã được nạp!";
        }
    }
}

// Disable Updates
function load_disable_updates(){
    const Confirmation = confirm("Nạp payload Disable Updates? Payload này sẽ chặn cập nhật hệ thống.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/disable-updates.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Disable Updates Payload đã được nạp!";
        }
    }
}

// Enable Updates
function load_enable_updates(){
    const Confirmation = confirm("Nạp payload Enable Updates? Payload này sẽ cho phép cập nhật hệ thống.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/enable-updates.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Enable Updates Payload đã được nạp!";
        }
    }
}

// FTP Server
function load_ftp(){
    const Confirmation = confirm("Nạp payload FTP Server? Payload này sẽ khởi chạy máy chủ FTP trên PS4.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/ftp.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "FTP Server Payload đã được nạp!";
        }
    }
}

// History Blocker
function load_history_blocker(){
    const Confirmation = confirm("Nạp payload History Blocker? Payload này sẽ chặn ghi lịch sử trình duyệt.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/history-blocker.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "History Blocker Payload đã được nạp!";
        }
    }
}

// PS4 Debug
function load_ps4debug(){
    const Confirmation = confirm("Nạp payload PS4Debug? Payload này sẽ bật các tính năng debug.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/ps4debug.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "PS4Debug Payload đã được nạp!";
        }
    }
}

// PUP Decrypt
function load_pup_decrypt(){
    const Confirmation = confirm("Nạp payload PUP Decrypt? Payload này cho phép giải mã file cập nhật PS4.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/pup-decrypt.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "PUP Decrypt Payload đã được nạp!";
        }
    }
}

// Restore
function load_restore(){
    const Confirmation = confirm("Nạp payload Restore? Payload này sẽ khôi phục dữ liệu hệ thống.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/restore.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Restore Payload đã được nạp!";
        }
    }
}

// RIF Renamer
function load_rif_renamer(){
    const Confirmation = confirm("Nạp payload RIF Renamer? Công cụ này dùng để quản lý file license.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/rif-renamer.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "RIF Renamer Payload đã được nạp!";
        }
    }
}

// WebRTE
function load_webrte(){
    const Confirmation = confirm("Nạp payload WebRTE? Payload này cho phép chỉnh sửa thời gian thực.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/WebRTE_900.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "WebRTE Payload đã được nạp!";
        }
    }
}

// Make all functions globally available
window.load_PSFreeFix = load_PSFreeFix;
window.load_app2usb = load_app2usb;
window.load_appcache_install = load_appcache_install;
window.load_backup = load_backup;
window.load_disable_updates = load_disable_updates;
window.load_enable_updates = load_enable_updates;
window.load_ftp = load_ftp;
window.load_history_blocker = load_history_blocker;
window.load_ps4debug = load_ps4debug;
window.load_pup_decrypt = load_pup_decrypt;
window.load_restore = load_restore;
window.load_rif_renamer = load_rif_renamer;
window.load_webrte = load_webrte;
