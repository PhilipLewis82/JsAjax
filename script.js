// 1. Detectar palíndromo
function fnDetectarStrPalindromo() {
    const StrTexto = document.getElementById("StrPalindromoInput").value.toLowerCase().replace(/[^a-záéíóúüñ]/gi, "");
    const StrInvertido = StrTexto.split('').reverse().join('');
    document.getElementById("StrPalindromoResultado").textContent = (StrTexto === StrInvertido) ? "Es un palíndromo" : "No es un palíndromo";
}

// 2. Comparar números
function fnCompararIntNumeros() {
    const IntNum1 = parseFloat(document.getElementById("IntNumero1").value);
    const IntNum2 = parseFloat(document.getElementById("IntNumero2").value);
    const StrResultado = (IntNum1 === IntNum2) ? "Son iguales" : (IntNum1 > IntNum2) ? `${IntNum1} es mayor` : `${IntNum2} es mayor`;
    document.getElementById("StrCompararResultado").textContent = StrResultado;
}

// 3. Mostrar vocales
function fnMostrarStrVocales() {
    const StrFrase = document.getElementById("StrFraseVocales").value.toLowerCase();
    const ArrVocales = StrFrase.match(/[aeiouáéíóúü]/g);
    document.getElementById("StrVocalesResultado").textContent = ArrVocales ? [...new Set(ArrVocales)].join(', ') : "No hay vocales";
}

// 4. Contar vocales
function fnContarStrVocales() {
    const StrFrase = document.getElementById("StrFraseContar").value.toLowerCase();
    const ObjConteo = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (const StrLetra of StrFrase) {
        if (ObjConteo.hasOwnProperty(StrLetra)) ObjConteo[StrLetra]++;
    }
    let StrResultado = "";
    for (const [StrVocal, IntCantidad] of Object.entries(ObjConteo)) {
        StrResultado += `${StrVocal}: ${IntCantidad}\n`;
    }
    document.getElementById("StrConteoVocales").textContent = StrResultado;
}

// 5. AJAX: al cargar
window.onload = () => {
    document.getElementById("StrUrlInput").value = window.location.href;
}

// 6. AJAX: Mostrar contenido de URL
function fnMostrarStrContenido() {
    const StrUrl = document.getElementById("StrUrlInput").value;
    const ObjXhr = new XMLHttpRequest();

    ObjXhr.onreadystatechange = function () {
        document.getElementById("StrEstado").textContent = `Estado: ${ObjXhr.readyState}`;
        if (ObjXhr.readyState === 4) {
            document.getElementById("StrContenido").textContent = ObjXhr.responseText;
            document.getElementById("StrCodigoEstado").textContent = `${ObjXhr.status} ${ObjXhr.statusText}`;
            document.getElementById("StrCabeceras").textContent = ObjXhr.getAllResponseHeaders();
        }
    };

    ObjXhr.open("GET", StrUrl, true);
    ObjXhr.send();
}
