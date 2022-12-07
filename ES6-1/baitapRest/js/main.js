const getEle = (id) => document.getElementById(id);

const tinhDTB = (...numbers) => {
    let tong = 0;
    let index = 0;
    if (numbers) {
        numbers.forEach(number => {
            tong += number;
            index++
        });
    };
    let total = tong / index;
    return total;
};

getEle("btnKhoi1").onclick = () => {
    let diemToan = getEle("inpToan").value * 1;
    let diemLy = getEle("inpLy").value * 1;
    let diemHoa = getEle("inpHoa").value * 1;
    getEle("tbKhoi1").innerHTML = tinhDTB(diemToan, diemLy, diemHoa);
};

getEle("btnKhoi2").onclick = () => {
    let diemVan = getEle("inpVan").value * 1;
    let diemSu = getEle("inpSu").value * 1;
    let diemDia = getEle("inpDia").value * 1;
    let diemAnh = getEle("inpEnglish").value * 1;
    getEle("tbKhoi2").innerHTML = tinhDTB(diemVan,diemSu,diemDia,diemAnh);
};