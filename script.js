// 巴黎三日游景点数据
const attractionsData = {
    '8.2': [
        {
            name: '戴高乐机场',
            time: '10:20 - 11:25',
            description: '到达机场，排队出关，准备前往酒店',
            lat: 49.0097,
            lng: 2.5479,
            icon: '✈️'
        },
        {
            name: 'Hôtel des Mines酒店',
            time: '12:25 - 13:00',
            description: '到达酒店，check in，收拾行李背包、补妆、休整',
            lat: 48.8439,
            lng: 2.3397,
            icon: '🏨'
        },
        {
            name: '圣叙尔比斯教堂',
            time: '13:15 - 13:40',
            description: '17世纪老教堂，步行前往，浅逛一下',
            lat: 48.8511,
            lng: 2.3339,
            icon: '⛪'
        },
        {
            name: 'Les Antiquaires餐厅',
            time: '14:00 - 15:00',
            description: '小红书评价不错的餐厅，已预订，步行前往',
            lat: 48.8566,
            lng: 2.3271,
            icon: '🍽️'
        },
        {
            name: '杜乐丽花园',
            time: '15:10 - 17:10',
            description: '从杜乐丽花园一路步行逛到凯旋门',
            lat: 48.8636,
            lng: 2.3271,
            icon: '🌳'
        },
        {
            name: '凯旋门',
            time: '17:10 - 18:00',
            description: '可登顶，不登顶的话直接前往埃菲尔铁塔区域',
            lat: 48.8738,
            lng: 2.2950,
            icon: '🏛️'
        },
        {
            name: 'Linette餐厅',
            time: '18:30 - 19:20',
            description: '埃菲尔铁塔附近，油封鸭好吃，步行/公交/打车前往',
            lat: 48.8584,
            lng: 2.3067,
            icon: '🍽️'
        },
        {
            name: '埃菲尔铁塔',
            time: '19:20 - 20:40',
            description: '登塔俯瞰巴黎夜景',
            lat: 48.8584,
            lng: 2.2945,
            icon: '🗼'
        },
        {
            name: '塞纳河游船',
            time: '21:40 - 22:40',
            description: '淘宝购票55RMB左右，欣赏巴黎夜景',
            lat: 48.8584,
            lng: 2.2945,
            icon: '🚢'
        }
    ],
    '8.3': [
        {
            name: 'Hôtel des Mines酒店',
            time: '08:30 - 09:30',
            description: '从酒店出发，买早餐、咖啡，步行前往圣礼拜堂',
            lat: 48.8439,
            lng: 2.3397,
            icon: '🏨'
        },
        {
            name: '圣礼拜堂',
            time: '09:30 - 10:30',
            description: '哥特式建筑杰作，以精美的彩绘玻璃窗闻名',
            lat: 48.8559,
            lng: 2.3450,
            icon: '⛪'
        },
        {
            name: '巴黎古监狱',
            time: '10:30 - 11:30',
            description: '中世纪监狱，法国大革命时期的重要历史建筑',
            lat: 48.8564,
            lng: 2.3456,
            icon: '🏛️'
        },
        {
            name: '巴黎圣母院',
            time: '11:30 - 12:30',
            description: '哥特式建筑杰作，巴黎最古老的教堂之一',
            lat: 48.8530,
            lng: 2.3499,
            icon: '⛪'
        },
        {
            name: 'Rue Mazarine餐厅',
            time: '12:30 - 13:30',
            description: '在Rue Mazarine附近就餐',
            lat: 48.8566,
            lng: 2.3370,
            icon: '🍽️'
        },
        {
            name: '卢浮宫',
            time: '14:00 - 18:00',
            description: '世界最大的艺术博物馆，收藏众多珍贵艺术品',
            lat: 48.8606,
            lng: 2.3376,
            icon: '🏛️'
        },
        {
            name: 'Nouille 2餐厅',
            time: '18:00 - 19:30',
            description: '从卢浮宫步行前往就餐',
            lat: 48.8620,
            lng: 2.3350,
            icon: '🍽️'
        }
    ],
    '8.4': [
        {
            name: 'Hôtel des Mines酒店',
            time: '08:30 - 09:00',
            description: '办理好行李寄存，从酒店出发到玛莱区',
            lat: 48.8439,
            lng: 2.3397,
            icon: '🏨'
        },
        {
            name: '玛莱区',
            time: '09:00 - 12:00',
            description: '在玛莱区citywalk，吃饭',
            lat: 48.8589,
            lng: 2.3622,
            icon: '🏘️'
        },
        {
            name: '蓬皮杜艺术中心',
            time: '12:00 - 13:00',
            description: '现代艺术博物馆，以独特的建筑风格闻名',
            lat: 48.8607,
            lng: 2.3522,
            icon: '🎨'
        },
        {
            name: '老佛爷百货',
            time: '13:00 - 17:00',
            description: '巴黎著名百货公司，购物天堂',
            lat: 48.8738,
            lng: 2.3324,
            icon: '🛍️'
        },
        {
            name: '戴高乐机场',
            time: '18:00 - 19:00',
            description: '从酒店拿完行李，坐RER B线前往机场',
            lat: 49.0097,
            lng: 2.5479,
            icon: '✈️'
        }
    ]
};

// 全局变量
let map;
let currentMarkers = [];
let currentPolylines = [];
let currentDate = '8.2';

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
    initializeDateNavigation();
    initializeModeToggle();
    updateTimeline(currentDate);
    loadAttractions(currentDate);
    
    // 确保初始状态为地图模式，显示底部栏
    switchToMapMode();
});

// 初始化地图
function initializeMap() {
    // 创建地图实例，以巴黎为中心
    map = L.map('map').setView([48.8566, 2.3522], 12);
    
    // 添加OpenStreetMap图层
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // 设置地图样式以适应移动端
    map.on('load', function() {
        document.getElementById('map').style.height = '100%';
    });
}

// 初始化日期导航
function initializeDateNavigation() {
    const dateButtons = document.querySelectorAll('.date-btn');
    
    dateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedDate = this.getAttribute('data-date');
            
            // 更新按钮状态
            dateButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 切换日期
            switchDate(selectedDate);
        });
    });
}

// 切换日期
async function switchDate(date) {
    currentDate = date;
    
    // 清除当前地图标记
    clearMarkers();
    
    // 更新标题
    updateDayTitle(date);
    
    // 更新时间线
    updateTimeline(date);
    
    // 加载新日期的景点（异步）
    await loadAttractions(date);
    
    // 检查当前模式并相应更新
    const tableContainer = document.getElementById('table-container');
    if (tableContainer && tableContainer.style.display === 'block') {
        // 表格模式：更新表格数据，隐藏景点详情
        loadTableData(date);
        const attractionsList = document.querySelector('.attractions-list');
        if (attractionsList) {
            attractionsList.style.display = 'none';
        }
    } else {
        // 地图模式：显示景点详情
        showAttractionsList(date);
    }
}

// 清除地图标记和路线
function clearMarkers() {
    currentMarkers.forEach(marker => {
        map.removeLayer(marker);
    });
    currentMarkers = [];
    
    // 清除路线
    currentPolylines.forEach(polyline => {
        map.removeLayer(polyline);
    });
    currentPolylines = [];
}

// 加载景点数据
async function loadAttractions(date) {
    const attractions = attractionsData[date];
    if (!attractions) return;
    
    // 添加景点标记到地图
    attractions.forEach((attraction, index) => {
        const marker = L.marker([attraction.lat, attraction.lng], {
            icon: L.divIcon({
                className: 'custom-marker',
                html: `<div class="marker-content">${attraction.icon}</div>`,
                iconSize: [40, 40],
                iconAnchor: [20, 40]
            })
        }).addTo(map);
        
        // 添加弹出信息
        const popupContent = `
            <div class="marker-popup">
                <h4>${attraction.name}</h4>
                <p><strong>时间：</strong>${attraction.time}</p>
                <p>${attraction.description}</p>
            </div>
        `;
        marker.bindPopup(popupContent);
        
        // 添加点击事件，显示景点详情并中心显示地图
        marker.on('click', function() {
            showAttractionDetail(attraction);
            
            // 将地图中心移动到该景点位置
            map.setView([attraction.lat, attraction.lng], 16);
        });
        
        currentMarkers.push(marker);
    });
    
    // 绘制路线（异步）
    await drawRoute(attractions);
    
    // 调整地图视野以显示所有景点
    if (attractions.length > 0) {
        const group = new L.featureGroup([...currentMarkers, ...currentPolylines]);
        map.fitBounds(group.getBounds().pad(0.1));
    }
}

// 绘制渐变路线
async function drawRoute(attractions) {
    if (attractions.length < 2) return;
    
    // 显示加载提示
    showRouteLoading();
    
    // 定义时间线渐变色数组（与CSS中的时间线颜色保持一致）
    const timelineColors = [
        '#FF9F43', // 橙色 - 起点
        '#FF6B6B', // 红色
        '#A55EEA', // 紫色
        '#6C5CE7', // 深紫色
        '#4A69BD'  // 深蓝色 - 终点
    ];
    
    // 根据日期决定是否跳过第一个路段或最后一个路段
    let startIndex = 1;
    let endIndex = attractions.length - 1;
    let routeIndex = 0;
    let totalRoutes = attractions.length - 1;
    
    // 如果是8.2且有机场，跳过机场到酒店的路段
    if (currentDate === '8.2' && attractions[0].name === '戴高乐机场') {
        startIndex = 1;
        totalRoutes = attractions.length - 2;
    } else {
        startIndex = 0;
        totalRoutes = attractions.length - 1;
    }
    
    // 如果是8.4且有机场在最后，跳过最后一个景点到机场的路段
    if (currentDate === '8.4' && attractions[attractions.length - 1].name === '戴高乐机场') {
        endIndex = attractions.length - 2;
        totalRoutes = totalRoutes - 1;
    }
    
    // 为每个路段创建不同颜色的线段
    for (let i = startIndex; i < endIndex; i++) {
        const startPoint = [attractions[i].lat, attractions[i].lng];
        const endPoint = [attractions[i + 1].lat, attractions[i + 1].lng];
        
        // 根据路线进度计算颜色
        const progress = totalRoutes > 1 ? routeIndex / (totalRoutes - 1) : 0; // 0到1之间的进度
        const colorIndex = Math.floor(progress * (timelineColors.length - 1));
        const nextColorIndex = Math.min(colorIndex + 1, timelineColors.length - 1);
        const subProgress = (progress * (timelineColors.length - 1)) - colorIndex;
        
        // 在两个颜色之间进行插值
        const color = interpolateColor(timelineColors[colorIndex], timelineColors[nextColorIndex], subProgress);
        
        // 获取真实步行路线
        const roadPath = await createRoadPath(startPoint, endPoint);
        
        // 创建线段
        const polyline = L.polyline(roadPath, {
            color: color,
            weight: 6,
            opacity: 0.8,
            lineCap: 'round',
            lineJoin: 'round',
            smoothFactor: 1
        }).addTo(map);
        
        // 添加发光效果
        const glowLine = L.polyline(roadPath, {
            color: color,
            weight: 10,
            opacity: 0.2,
            lineCap: 'round',
            lineJoin: 'round',
            smoothFactor: 1
        }).addTo(map);
        
        // 添加箭头标记
        const arrowHead = L.polylineDecorator(polyline, {
            patterns: [{
                offset: '70%',
                repeat: 0,
                symbol: L.Symbol.arrowHead({
                    pixelSize: 8,
                    polygon: false,
                    pathOptions: {
                        color: color,
                        fillOpacity: 1,
                        weight: 2
                    }
                })
            }]
        }).addTo(map);
        
        // 添加路段信息弹窗
        const startAttraction = attractions[i];
        const endAttraction = attractions[i + 1];
        
        // 计算实际步行距离
        const walkingDistance = calculateWalkingDistance(roadPath);
        
        polyline.bindPopup(`
            <div class="route-popup">
                <h5>🚶‍♀️ 步行路段 ${routeIndex + 1}</h5>
                <p><strong>从：</strong>${startAttraction.name}</p>
                <p><strong>到：</strong>${endAttraction.name}</p>
                <p><strong>时间：</strong>${startAttraction.time} → ${endAttraction.time}</p>
                <p><strong>步行距离：</strong>约 ${walkingDistance.toFixed(1)} 公里</p>
                <p><strong>预计时间：</strong>约 ${Math.ceil(walkingDistance * 12)} 分钟</p>
                <p><strong>交通：</strong>🚶‍♀️ 步行</p>
            </div>
        `);
        
        currentPolylines.push(polyline);
        currentPolylines.push(glowLine);
        currentPolylines.push(arrowHead);
        
        routeIndex++;
    }
    
    // 隐藏加载提示
    hideRouteLoading();
}

// 显示路线加载提示
function showRouteLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'route-loading';
    loadingDiv.innerHTML = `
        <div class="loading-content">
            <div class="loading-spinner"></div>
            <p>正在计算步行路线...</p>
        </div>
    `;
    document.body.appendChild(loadingDiv);
}

// 隐藏路线加载提示
function hideRouteLoading() {
    const loadingDiv = document.getElementById('route-loading');
    if (loadingDiv) {
        loadingDiv.remove();
    }
}

// 获取真实的步行路线
async function getWalkingRoute(startPoint, endPoint) {
    try {
        // 使用OSRM步行路由服务
        const url = `https://router.project-osrm.org/route/v1/foot/${startPoint[1]},${startPoint[0]};${endPoint[1]},${endPoint[0]}?overview=full&geometries=geojson`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.routes && data.routes.length > 0) {
            // 提取GeoJSON路径并转换为Leaflet格式
            const coordinates = data.routes[0].geometry.coordinates;
            return coordinates.map(coord => [coord[1], coord[0]]); // 转换为[lat, lng]格式
        }
    } catch (error) {
        console.log('无法获取步行路线，使用直线路径:', error);
    }
    
    // 如果API调用失败，返回直线路径
    return [startPoint, endPoint];
}

// 创建道路路径（获取真实步行路线）
async function createRoadPath(startPoint, endPoint) {
    // 计算两点间的距离
    const distance = calculateDistance(startPoint[0], startPoint[1], endPoint[0], endPoint[1]);
    
    // 如果距离太近（小于500米），使用直线路径
    if (distance < 0.5) {
        return [startPoint, endPoint];
    }
    
    // 获取真实的步行路线
    return await getWalkingRoute(startPoint, endPoint);
}

// 计算两点间距离（公里）
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // 地球半径（公里）
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// 计算步行路径的总距离
function calculateWalkingDistance(path) {
    let totalDistance = 0;
    
    for (let i = 0; i < path.length - 1; i++) {
        const point1 = path[i];
        const point2 = path[i + 1];
        totalDistance += calculateDistance(point1[0], point1[1], point2[0], point2[1]);
    }
    
    return totalDistance;
}

// 颜色插值函数
function interpolateColor(color1, color2, factor) {
    // 将十六进制颜色转换为RGB
    const hex1 = color1.replace('#', '');
    const hex2 = color2.replace('#', '');
    
    const r1 = parseInt(hex1.substr(0, 2), 16);
    const g1 = parseInt(hex1.substr(2, 2), 16);
    const b1 = parseInt(hex1.substr(4, 2), 16);
    
    const r2 = parseInt(hex2.substr(0, 2), 16);
    const g2 = parseInt(hex2.substr(2, 2), 16);
    const b2 = parseInt(hex2.substr(4, 2), 16);
    
    // 线性插值
    const r = Math.round(r1 + (r2 - r1) * factor);
    const g = Math.round(g1 + (g2 - g1) * factor);
    const b = Math.round(b1 + (b2 - b1) * factor);
    
    // 转换回十六进制
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// 更新日期标题
function updateDayTitle(date) {
    const dayTitles = {
        '8.2': '8月2日 - 第一天',
        '8.3': '8月3日 - 第二天',
        '8.4': '8月4日 - 第三天'
    };
    
    // 更新地图模式的标题
    const titleElement = document.querySelector('.attractions-list .day-title');
    if (titleElement) {
        titleElement.textContent = dayTitles[date];
    }
    
    // 更新表格模式的标题
    const tableTitleElement = document.querySelector('#table-container .day-title');
    if (tableTitleElement) {
        tableTitleElement.textContent = dayTitles[date];
    }
}

// 更新时间线
function updateTimeline(date) {
    const timelineData = {
        '8.2': {
            startTime: '10:20',
            endTime: '23:00',
            startHour: 10.33, // 10:20 = 10.33小时
            endHour: 23.0     // 23:00 = 23.0小时
        },
        '8.3': {
            startTime: '08:30',
            endTime: '19:30',
            startHour: 8.5,   // 08:30 = 8.5小时
            endHour: 19.5     // 19:30 = 19.5小时
        },
        '8.4': {
            startTime: '08:30',
            endTime: '19:00',
            startHour: 8.5,   // 08:30 = 8.5小时
            endHour: 19.0     // 19:00 = 19.0小时
        }
    };
    
    const data = timelineData[date];
    if (!data) return;
    
    // 更新时间标签
    const timeLabels = document.querySelectorAll('.timeline-label .time');
    if (timeLabels.length >= 2) {
        timeLabels[0].textContent = data.startTime;
        timeLabels[1].textContent = data.endTime;
    }
    
    // 添加景点图标到时间线
    addTimelineAttractions(date, data);
    
    // 计算当前时间在时间线上的位置
    const now = new Date();
    const currentHour = now.getHours() + now.getMinutes() / 60;
    
    // 计算当前时间标记的位置百分比
    let markerPosition = 0;
    if (currentHour >= data.startHour && currentHour <= data.endHour) {
        markerPosition = ((currentHour - data.startHour) / (data.endHour - data.startHour)) * 100;
    } else if (currentHour > data.endHour) {
        markerPosition = 100;
    }
    
    // 更新当前时间标记位置
    const currentMarker = document.getElementById('timeline-current-marker');
    if (currentMarker) {
        currentMarker.style.left = `${markerPosition}%`;
    }
}

// 添加景点图标到时间线
function addTimelineAttractions(date, timelineData) {
    const attractions = attractionsData[date];
    const timelineAttractions = document.getElementById('timeline-attractions');
    
    if (!attractions || !timelineAttractions) return;
    
    // 清空现有的景点图标
    timelineAttractions.innerHTML = '';
    
    attractions.forEach(attraction => {
        // 解析时间字符串，获取小时和分钟
        const timeMatch = attraction.time.match(/(\d{1,2}):(\d{2})/);
        if (!timeMatch) return;
        
        const hour = parseInt(timeMatch[1]);
        const minute = parseInt(timeMatch[2]);
        const attractionHour = hour + minute / 60;
        
        // 计算景点在时间线上的位置百分比
        const position = ((attractionHour - timelineData.startHour) / (timelineData.endHour - timelineData.startHour)) * 100;
        
        // 确保位置在有效范围内
        if (position >= 0 && position <= 100) {
            const attractionElement = document.createElement('div');
            attractionElement.className = 'timeline-attraction';
            attractionElement.style.left = `${position}%`;
            attractionElement.innerHTML = attraction.icon;
            attractionElement.title = `${attraction.name} - ${attraction.time}`;
            
            // 添加点击事件，显示景点详情并中心显示地图
            attractionElement.addEventListener('click', () => {
                showAttractionDetail(attraction);
                
                // 将地图中心移动到该景点位置
                if (map) {
                    map.setView([attraction.lat, attraction.lng], 16);
                    
                    // 高亮显示该景点的标记（可选）
                    // 这里可以添加标记高亮逻辑
                }
            });
            
            timelineAttractions.appendChild(attractionElement);
        }
    });
}

// 显示景点详情（初始状态显示占位符）
function showAttractionsList(date) {
    // 重置详情显示为占位符
    resetAttractionDetail();
    
    // 检查当前是否在地图模式，如果是则显示景点详情容器
    const tableContainer = document.getElementById('table-container');
    if (!tableContainer || tableContainer.style.display !== 'block') {
        const attractionsList = document.querySelector('.attractions-list');
        if (attractionsList) {
            attractionsList.style.display = 'block';
        }
    }
}

// 重置景点详情为占位符
function resetAttractionDetail() {
    const detailContainer = document.getElementById('attraction-detail');
    if (detailContainer) {
        detailContainer.innerHTML = `
            <div class="detail-placeholder">
                <div class="placeholder-icon">🗺️</div>
                <div class="placeholder-text">点击地图上的景点查看详细信息</div>
            </div>
        `;
    }
}

// 显示景点详情
function showAttractionDetail(attraction) {
    const detailContainer = document.getElementById('attraction-detail');
    if (!detailContainer) return;
    
    // 机场特殊处理：显示图片指南
    let additionalContent = '';
    if (attraction.name === '戴高乐机场') {
        additionalContent = `
            <div class="airport-guide">
                <h4>🚶‍♀️ RER-B线指南</h4>
                <div class="guide-images">
                    <div class="guide-step">
                        <img src="Images/airport/出口.png" alt="出口" loading="lazy">
                        <p>1. 出口</p>
                    </div>
                    <div class="guide-step">
                        <img src="Images/airport/跟train走.png" alt="跟train走" loading="lazy">
                        <p>2. 跟train走</p>
                    </div>
                    <div class="guide-step">
                        <img src="Images/airport/继续.png" alt="继续" loading="lazy">
                        <p>3. 继续</p>
                    </div>
                    <div class="guide-step">
                        <img src="Images/airport/平地梯.png" alt="平地梯" loading="lazy">
                        <p>4. 平地梯</p>
                    </div>
                    <div class="guide-step">
                        <img src="Images/airport/标识.png" alt="标识" loading="lazy">
                        <p>5. 标识</p>
                    </div>
                    <div class="guide-step">
                        <img src="Images/airport/买票.png" alt="买票" loading="lazy">
                        <p>6. 买票</p>
                    </div>
                </div>
            </div>
        `;
    } else if (attraction.name === 'Les Antiquaires餐厅') {
        additionalContent = `
            <div class="restaurant-info">
                <h4>🍽️ 餐厅预订信息</h4>
                <div class="restaurant-image">
                    <img src="Images/8.2/餐厅预订.jpg" alt="Les Antiquaires餐厅预订" loading="lazy">
                </div>
            </div>
        `;
    }
    
    detailContainer.innerHTML = `
        <div class="attraction-detail-content">
            <div class="detail-header">
                <div class="detail-icon">${attraction.icon}</div>
                <h3 class="detail-title">${attraction.name}</h3>
            </div>
            <div class="detail-time">⏰ ${attraction.time}</div>
            <div class="detail-description">${attraction.description}</div>
            ${additionalContent}
            <div class="detail-info">
                <h4>📍 位置信息</h4>
                <p><strong>纬度：</strong>${attraction.lat.toFixed(6)}</p>
                <p><strong>经度：</strong>${attraction.lng.toFixed(6)}</p>
                <p><strong>坐标：</strong>${attraction.lat.toFixed(6)}, ${attraction.lng.toFixed(6)}</p>
            </div>
        </div>
    `;
}

// 添加自定义标记样式
const style = document.createElement('style');
style.textContent = `
    .custom-marker {
        background: none;
        border: none;
    }
    
    .marker-content {
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: white;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        border: 3px solid white;
    }
    
    .marker-popup {
        text-align: center;
        min-width: 200px;
    }
    
    .marker-popup h4 {
        margin: 0 0 8px 0;
        color: #2c3e50;
        font-size: 16px;
    }
    
    .marker-popup p {
        margin: 5px 0;
        font-size: 14px;
        color: #7f8c8d;
    }
    
    .attraction-item {
        cursor: pointer;
    }
    
    .route-popup {
        text-align: center;
        min-width: 200px;
    }
    
    .route-popup h5 {
        margin: 0 0 8px 0;
        color: #2c3e50;
        font-size: 14px;
        font-weight: 600;
    }
    
    .route-popup p {
        margin: 4px 0;
        font-size: 12px;
        color: #7f8c8d;
    }
    
    #route-loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }
    
    .loading-content {
        background: white;
        padding: 30px;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
    
    .loading-spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #667eea;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 15px;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .loading-content p {
        margin: 0;
        color: #2c3e50;
        font-size: 16px;
        font-weight: 500;
    }
`;
document.head.appendChild(style);

// 处理地图加载完成后的样式调整
window.addEventListener('resize', function() {
    if (map) {
        map.invalidateSize();
    }
});

// 初始化模式切换
function initializeModeToggle() {
    const mapModeBtn = document.getElementById('mode-toggle-btn');
    const tableModeBtn = document.getElementById('table-mode-toggle-btn');
    
    mapModeBtn.addEventListener('click', function() {
        switchToTableMode();
    });
    
    tableModeBtn.addEventListener('click', function() {
        switchToMapMode();
    });
}

// 切换到表格模式
function switchToTableMode() {
    const mapContainer = document.querySelector('.map-container');
    const tableContainer = document.getElementById('table-container');
    const attractionsList = document.querySelector('.attractions-list');
    
    mapContainer.style.display = 'none';
    tableContainer.style.display = 'block';
    attractionsList.style.display = 'none';
    
    // 加载表格数据
    loadTableData(currentDate);
}

// 切换到地图模式
function switchToMapMode() {
    const mapContainer = document.querySelector('.map-container');
    const tableContainer = document.getElementById('table-container');
    const attractionsList = document.querySelector('.attractions-list');
    
    mapContainer.style.display = 'block';
    tableContainer.style.display = 'none';
    attractionsList.style.display = 'block';
    
    // 重置详情显示
    resetAttractionDetail();
}

// 加载表格数据
function loadTableData(date) {
    const attractions = attractionsData[date];
    const tableBody = document.querySelector('#attractions-table tbody');
    const tableDayTitle = document.querySelector('#table-container .day-title');
    
    if (!attractions || !tableBody) return;
    
    // 更新表格标题
    const dayTitles = {
        '8.2': '8月2日 - 第一天',
        '8.3': '8月3日 - 第二天',
        '8.4': '8月4日 - 第三天'
    };
    
    // 更新表格标题（如果存在）
    if (tableDayTitle) {
        tableDayTitle.textContent = dayTitles[date];
    }
    
    // 清空表格内容
    tableBody.innerHTML = '';
    
    // 添加表格行
    attractions.forEach(attraction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${attraction.time}</td>
            <td>${attraction.icon} ${attraction.name}</td>
            <td>${attraction.description}</td>
        `;
        
        // 添加点击事件，定位到地图上的景点并显示详情
        row.addEventListener('click', function() {
            // 切换到地图模式并定位到景点
            switchToMapMode();
            map.setView([attraction.lat, attraction.lng], 16);
            
            // 显示景点详情
            showAttractionDetail(attraction);
            
            // 找到对应的标记并打开弹窗
            currentMarkers.forEach(marker => {
                const markerLatLng = marker.getLatLng();
                if (markerLatLng.lat === attraction.lat && markerLatLng.lng === attraction.lng) {
                    marker.openPopup();
                }
            });
        });
        
        tableBody.appendChild(row);
    });
}



// 每分钟更新时间线
setInterval(function() {
    updateTimeline(currentDate);
}, 60000); 