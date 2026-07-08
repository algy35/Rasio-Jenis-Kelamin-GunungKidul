var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RasioJenisKelamin_GunungKidul_1 = new ol.format.GeoJSON();
var features_RasioJenisKelamin_GunungKidul_1 = format_RasioJenisKelamin_GunungKidul_1.readFeatures(json_RasioJenisKelamin_GunungKidul_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RasioJenisKelamin_GunungKidul_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RasioJenisKelamin_GunungKidul_1.addFeatures(features_RasioJenisKelamin_GunungKidul_1);
var lyr_RasioJenisKelamin_GunungKidul_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RasioJenisKelamin_GunungKidul_1, 
                style: style_RasioJenisKelamin_GunungKidul_1,
                popuplayertitle: 'RasioJenisKelamin_GunungKidul',
                interactive: true,
    title: 'RasioJenisKelamin_GunungKidul<br />\
    <img src="styles/legend/RasioJenisKelamin_GunungKidul_1_0.png" /> Rendah<br />\
    <img src="styles/legend/RasioJenisKelamin_GunungKidul_1_1.png" /> Sedang<br />\
    <img src="styles/legend/RasioJenisKelamin_GunungKidul_1_2.png" /> Tinggi<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_RasioJenisKelamin_GunungKidul_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_RasioJenisKelamin_GunungKidul_1];
lyr_RasioJenisKelamin_GunungKidul_1.set('fieldAliases', {'WADMKC': 'Kecamatan', 'Rasio Jeni': 'Rasio Jenis Kelamin', });
lyr_RasioJenisKelamin_GunungKidul_1.set('fieldImages', {'WADMKC': 'TextEdit', 'Rasio Jeni': 'TextEdit', });
lyr_RasioJenisKelamin_GunungKidul_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'Rasio Jeni': 'inline label - always visible', });
lyr_RasioJenisKelamin_GunungKidul_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});