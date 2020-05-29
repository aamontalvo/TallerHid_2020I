ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3116").setExtent([904282.990217, 1691349.364579, 941855.394016, 1713872.538535]);
var wms_layers = [];

var lyr_DEM_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "DEM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DEM_0.png",
    attributions: ' ',
                                projection: 'EPSG:3116',
                                alwaysInRange: true,
                                imageExtent: [914857.170000, 1700237.400000, 925080.005400, 1710764.260300]
                            })
                        });
var format_CN10M_1 = new ol.format.GeoJSON();
var features_CN10M_1 = format_CN10M_1.readFeatures(json_CN10M_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3116'});
var jsonSource_CN10M_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CN10M_1.addFeatures(features_CN10M_1);
var lyr_CN10M_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CN10M_1, 
                style: style_CN10M_1,
                interactive: true,
                title: '<img src="styles/legend/CN10M_1.png" /> CN 10 M'
            });
var format_CN20M_2 = new ol.format.GeoJSON();
var features_CN20M_2 = format_CN20M_2.readFeatures(json_CN20M_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3116'});
var jsonSource_CN20M_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CN20M_2.addFeatures(features_CN20M_2);
var lyr_CN20M_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CN20M_2, 
                style: style_CN20M_2,
                interactive: true,
                title: '<img src="styles/legend/CN20M_2.png" /> CN 20M'
            });
var format_L1_3 = new ol.format.GeoJSON();
var features_L1_3 = format_L1_3.readFeatures(json_L1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3116'});
var jsonSource_L1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L1_3.addFeatures(features_L1_3);
var lyr_L1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_L1_3, 
                style: style_L1_3,
                interactive: false,
                title: '<img src="styles/legend/L1_3.png" /> L1'
            });
var format_L2_4 = new ol.format.GeoJSON();
var features_L2_4 = format_L2_4.readFeatures(json_L2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3116'});
var jsonSource_L2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L2_4.addFeatures(features_L2_4);
var lyr_L2_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_L2_4, 
                style: style_L2_4,
                interactive: false,
                title: '<img src="styles/legend/L2_4.png" /> L2'
            });
var format_L3_5 = new ol.format.GeoJSON();
var features_L3_5 = format_L3_5.readFeatures(json_L3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3116'});
var jsonSource_L3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L3_5.addFeatures(features_L3_5);
var lyr_L3_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_L3_5, 
                style: style_L3_5,
                interactive: false,
                title: '<img src="styles/legend/L3_5.png" /> L3'
            });
var format_l4_6 = new ol.format.GeoJSON();
var features_l4_6 = format_l4_6.readFeatures(json_l4_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3116'});
var jsonSource_l4_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_l4_6.addFeatures(features_l4_6);
var lyr_l4_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_l4_6, 
                style: style_l4_6,
                interactive: false,
                title: '<img src="styles/legend/l4_6.png" /> l4'
            });
var format_L5_7 = new ol.format.GeoJSON();
var features_L5_7 = format_L5_7.readFeatures(json_L5_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3116'});
var jsonSource_L5_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L5_7.addFeatures(features_L5_7);
var lyr_L5_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_L5_7, 
                style: style_L5_7,
                interactive: false,
                title: '<img src="styles/legend/L5_7.png" /> L5'
            });
var format_L6_8 = new ol.format.GeoJSON();
var features_L6_8 = format_L6_8.readFeatures(json_L6_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3116'});
var jsonSource_L6_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L6_8.addFeatures(features_L6_8);
var lyr_L6_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_L6_8, 
                style: style_L6_8,
                interactive: false,
                title: '<img src="styles/legend/L6_8.png" /> L6'
            });
var format_L7_9 = new ol.format.GeoJSON();
var features_L7_9 = format_L7_9.readFeatures(json_L7_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3116'});
var jsonSource_L7_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L7_9.addFeatures(features_L7_9);
var lyr_L7_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_L7_9, 
                style: style_L7_9,
                interactive: false,
                title: '<img src="styles/legend/L7_9.png" /> L7'
            });

lyr_DEM_0.setVisible(true);lyr_CN10M_1.setVisible(true);lyr_CN20M_2.setVisible(true);lyr_L1_3.setVisible(true);lyr_L2_4.setVisible(true);lyr_L3_5.setVisible(true);lyr_l4_6.setVisible(true);lyr_L5_7.setVisible(true);lyr_L6_8.setVisible(true);lyr_L7_9.setVisible(true);
var layersList = [lyr_DEM_0,lyr_CN10M_1,lyr_CN20M_2,lyr_L1_3,lyr_L2_4,lyr_L3_5,lyr_l4_6,lyr_L5_7,lyr_L6_8,lyr_L7_9];
lyr_CN10M_1.set('fieldAliases', {'ELEV': 'ELEV', });
lyr_CN20M_2.set('fieldAliases', {'ELEV': 'ELEV', });
lyr_L1_3.set('fieldAliases', {'FID': 'FID', });
lyr_L2_4.set('fieldAliases', {'FID': 'FID', });
lyr_L3_5.set('fieldAliases', {'FID': 'FID', });
lyr_l4_6.set('fieldAliases', {'FID': 'FID', });
lyr_L5_7.set('fieldAliases', {'FID': 'FID', });
lyr_L6_8.set('fieldAliases', {'FID': 'FID', });
lyr_L7_9.set('fieldAliases', {'FID': 'FID', });
lyr_CN10M_1.set('fieldImages', {'ELEV': '', });
lyr_CN20M_2.set('fieldImages', {'ELEV': '', });
lyr_L1_3.set('fieldImages', {'FID': '', });
lyr_L2_4.set('fieldImages', {'FID': '', });
lyr_L3_5.set('fieldImages', {'FID': '', });
lyr_l4_6.set('fieldImages', {'FID': '', });
lyr_L5_7.set('fieldImages', {'FID': '', });
lyr_L6_8.set('fieldImages', {'FID': '', });
lyr_L7_9.set('fieldImages', {'FID': '', });
lyr_CN10M_1.set('fieldLabels', {'ELEV': 'header label', });
lyr_CN20M_2.set('fieldLabels', {'ELEV': 'header label', });
lyr_L1_3.set('fieldLabels', {'FID': 'no label', });
lyr_L2_4.set('fieldLabels', {'FID': 'no label', });
lyr_L3_5.set('fieldLabels', {'FID': 'no label', });
lyr_l4_6.set('fieldLabels', {'FID': 'no label', });
lyr_L5_7.set('fieldLabels', {'FID': 'no label', });
lyr_L6_8.set('fieldLabels', {'FID': 'no label', });
lyr_L7_9.set('fieldLabels', {'FID': 'no label', });
lyr_L7_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});