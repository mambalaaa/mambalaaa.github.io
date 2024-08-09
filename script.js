document.addEventListener('DOMContentLoaded', function () {
    // Uložení stavu otevření boxů
    const boxStates = {
        xc: false,
        trail: false,
        enduro: false,
        downhill: false
    };

    // Funkce pro zobrazení detailů o jednotlivých typech jízd
    function showDetails(type) {
        const box = document.getElementById(type + '-box');
        const detailsContainer = document.getElementById('details');
        let content = '';

        // Zrušení ostatních otevřených boxů
        for (let key in boxStates) {
            if (boxStates[key] && key !== type) {
                document.getElementById(key + '-box').classList.remove('expanded');
                boxStates[key] = false;
            }
        }

        // Změna stavu aktuálního boxu
        boxStates[type] = !boxStates[type];

        if (boxStates[type]) {
            box.classList.add('expanded');
        } else {
            box.classList.remove('expanded');
        }

        switch (type) {
            case 'xc':
                content = `
                    <div class="detail-content">
                        <h3>Co je to XC?</h3>
                        <p>XC (Cross Country) je styl jízdy, který se zaměřuje na rychlost a efektivitu na dlouhých tratích s lehčími překážkami. Typické XC kolo je lehké, má menší zdvih odpružení a je navrženo pro rychlé stoupání i rychlé sjezdy.</p>
                        <div class="specifications">
                            <h4>Typy XC kol:</h4>
                            <div class="spec-box">
                                <h4>Santa Cruz Blur</h4>
                                <div class="spec-details">
                                    <ul>
                                        <li>Hmotnost: 11.5 kg</li>
                                        <li>Odpružení: 100mm</li>
                                        <li>Materiál rámu: Karbon</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="spec-box">
                                <h4>Canyon Lux</h4>
                                <div class="spec-details">
                                    <ul>
                                        <li>Hmotnost: 10.8 kg</li>
                                        <li>Odpružení: 110mm</li>
                                        <li>Materiál rámu: Karbon</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>`;
                break;

            case 'trail':
                content = `
                    <div class="detail-content">
                        <h3>Co je to Trail?</h3>
                        <p>Trail je styl jízdy zaměřený na univerzálnost. Trailová kola mají obvykle střední zdvih odpružení, což umožňuje pohodlnou jízdu v terénu, ale i dostatečnou efektivitu při stoupání.</p>
                        <div class="specifications">
                            <h4>Typy Trail kol:</h4>
                            <div class="spec-box">
                                <h4>YT Jeffsy</h4>
                                <div class="spec-details">
                                    <ul>
                                        <li>Hmotnost: 13.5 kg</li>
                                        <li>Odpružení: 140mm</li>
                                        <li>Materiál rámu: Karbon</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="spec-box">
                                <h4>Santa Cruz 5010</h4>
                                <div class="spec-details">
                                    <ul>
                                        <li>Hmotnost: 13.2 kg</li>
                                        <li>Odpružení: 130mm</li>
                                        <li>Materiál rámu: Karbon</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>`;
                break;

            case 'enduro':
                content = `
                    <div class="detail-content">
                        <h3>Co je to Enduro?</h3>
                        <p>Enduro je styl jízdy, který kombinuje dlouhá stoupání s agresivními a technicky náročnými sjezdy. Enduro kola mají větší zdvih odpružení, robustní konstrukci a jsou navržena pro maximální kontrolu při rychlé jízdě dolů.</p>
                        <div class="specifications">
                            <h4>Typy Enduro kol:</h4>
                            <div class="spec-box">
                                <h4>Canyon Strive</h4>
                                <div class="spec-details">
                                    <ul>
                                        <li>Hmotnost: 14.8 kg</li>
                                        <li>Odpružení: 170mm</li>
                                        <li>Materiál rámu: Karbon</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="spec-box">
                                <h4>YT Capra</h4>
                                <div class="spec-details">
                                    <ul>
                                        <li>Hmotnost: 15.2 kg</li>
                                        <li>Odpružení: 180mm</li>
                                        <li>Materiál rámu: Karbon</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>`;
                break;

            case 'downhill':
                content = `
                    <div class="detail-content">
                        <h3>Co je to Downhill?</h3>
                        <p>Downhill je extrémní styl jízdy zaměřený na rychlost a kontrolu při jízdě z kopce. Downhillová kola mají masivní odpružení, odolnou konstrukci a jsou navržena pro nejdrsnější sjezdy a skoky.</p>
                        <div class="specifications">
                            <h4>Typy Downhill kol:</h4>
                            <div class="spec-box">
                                <h4>Santa Cruz V10</h4>
                                <div class="spec-details">
                                    <ul>
                                        <li>Hmotnost: 16.5 kg</li>
                                        <li>Odpružení: 200mm</li>
                                        <li>Materiál rámu: Karbon</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="spec-box">
                                <h4>Canyon Sender</h4>
                                <div class="spec-details">
                                    <ul>
                                        <li>Hmotnost: 16.8 kg</li>
                                        <li>Odpružení: 200mm</li>
                                        <li>Materiál rámu: Karbon</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>`;
                break;
        }

        detailsContainer.innerHTML = content;

        // Přidání funkcionality pro rozbalení specifikací
        document.querySelectorAll('.spec-box').forEach(function (box) {
            box.addEventListener('click', function () {
                const details = this.querySelector('.spec-details');
                details.classList.toggle('show');
            });
        });
    }

    // Event listeners pro jednotlivé boxy
    document.getElementById('xc-box').addEventListener('click', function () {
        showDetails('xc');
    });

    document.getElementById('trail-box').addEventListener('click', function () {
        showDetails('trail');
    });

    document.getElementById('enduro-box').addEventListener('click', function () {
        showDetails('enduro');
    });

    document.getElementById('downhill-box').addEventListener('click', function () {
        showDetails('downhill');
    });

    // Event listener pro scrollování k údržbě kola
    document.querySelector('.button').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('maintenance').scrollIntoView({ behavior: 'smooth' });
    });

    // Event listener pro scrollování k výběru MTB kola
    document.querySelector('.button-choose').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('choose').scrollIntoView({ behavior: 'smooth' });
    });
});
