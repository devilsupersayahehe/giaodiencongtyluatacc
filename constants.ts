import { 
    Briefcase, Scale, Copyright, FileSignature, Users, Building2, 
    Calculator, Globe, HeartHandshake, ShieldCheck, Banknote, 
    Clock, Heart, Lock
} from 'lucide-react';
import { Service, Testimonial, TeamMember, PressItem, Branch, WordPressPost } from './types';

export const SERVICES: Service[] = [
    { id: 1, title: 'Tư Vấn Doanh Nghiệp', description: 'Giải pháp toàn diện từ thành lập, quản trị đến tái cấu trúc doanh nghiệp.', link: '/dich-vu/doanh-nghiep', icon: Briefcase },
    { id: 2, title: 'Tranh Tụng', description: 'Đại diện pháp lý chuyên nghiệp trong các vụ tranh chấp dân sự, thương mại.', link: '/dich-vu/tranh-tung', icon: Scale },
    { id: 3, title: 'Sở Hữu Trí Tuệ', description: 'Đăng ký và bảo vệ độc quyền thương hiệu, bản quyền, sáng chế.', link: '/dich-vu/so-huu-tri-tue', icon: Copyright },
    { id: 4, title: 'Tư Vấn Hợp Đồng', description: 'Soạn thảo, rà soát hợp đồng đảm bảo an toàn pháp lý tối đa.', link: '/dich-vu/hop-dong', icon: FileSignature },
    { id: 5, title: 'Lao Động', description: 'Tư vấn luật lao động, xây dựng nội quy và giải quyết tranh chấp.', link: '/dich-vu/lao-dong', icon: Users },
    { id: 6, title: 'Bất Động Sản', description: 'Hỗ trợ pháp lý mua bán, chuyển nhượng và đầu tư bất động sản.', link: '/dich-vu/bat-dong-san', icon: Building2 },
    { id: 7, title: 'Tư Vấn Thuế', description: 'Tối ưu hóa nghĩa vụ thuế và hoạch định chiến lược tài chính.', link: '/dich-vu/thue', icon: Calculator },
    { id: 8, title: 'Di Trú & Visa', description: 'Thủ tục visa, thẻ tạm trú, định cư cho người nước ngoài.', link: '/dich-vu/visa', icon: Globe },
    { id: 9, title: 'Hôn Nhân & Gia Đình', description: 'Tư vấn ly hôn, chia tài sản, quyền nuôi con và thừa kế.', link: '/dich-vu/hon-nhan', icon: HeartHandshake },
];

export const TESTIMONIALS: Testimonial[] = [
    { id: 1, content: "ACC đã giúp công ty chúng tôi giải quyết một vụ tranh chấp thương mại phức tạp một cách chuyên nghiệp và hiệu quả.", author: "Trần Mạnh Tâm", position: "Giám đốc, Công ty TNHH Long Dragon", image: "https://congtyluatacc.vn/wp-content/uploads/2025/07/z6771125489768_3286a30621378ec0482640033d1746ef.jpg" },
    { id: 2, content: "Tôi rất ấn tượng với dịch vụ tư vấn hợp đồng của ACC. Họ đã giúp tôi rà soát và tối ưu hóa các điều khoản hợp đồng.", author: "Trần Thị Lan Anh", position: "Chủ doanh nghiệp cá nhân", image: "https://congtyluatacc.vn/wp-content/uploads/2025/07/smiling-young-pretty-woman-standing-looking-camera-isolated-white-background-with-copy-space-scaled.jpg" },
    { id: 3, content: "Nhờ ACC, tôi đã hoàn thành thủ tục đăng ký sở hữu trí tuệ một cách nhanh chóng và suôn sẻ.", author: "Lê Quang Vinh", position: "Nhà sáng tạo nội dung", image: "https://congtyluatacc.vn/wp-content/uploads/2025/07/closeup-portrait-smiling-young-asian-man-scaled.jpg" },
    { id: 4, content: "Dịch vụ tư vấn pháp luật lao động của ACC đã giúp doanh nghiệp chúng tôi xây dựng quy trình nhân sự hợp pháp.", author: "Phạm Hồng Nhung", position: "Trưởng phòng Nhân sự", image: "https://congtyluatacc.vn/wp-content/uploads/2025/07/beautiful-korean-girl-smiling-white-teeth-looking-lovely-camera-standing-white-tshirt-studio-background-scaled.jpg" },
    { id: 5, content: "ACC đã hỗ trợ tôi trong một vụ việc liên quan đến bất động sản với sự am hiểu sâu sắc và giải pháp thực tiễn.", author: "Chị Zema", position: "Nhà đầu tư bất động sản", image: "https://congtyluatacc.vn/wp-content/uploads/2025/07/z6771196918174_f4f529ae4e54eda8b9a3e13f5cc0878e.jpg" }
];

export const TEAM: TeamMember[] = [
    { category: "LUẬT SƯ", title: "HỒ THỊ HỒNG CHUNG", desc: "Luật sư Hồ Thị Hồng Chung là chuyên gia pháp lý giàu kinh nghiệm trong lĩnh vực đầu tư, đặc biệt là tư vấn thủ tục và đồng hành pháp lý cho các dự án trong và ngoài nước.", tags: ["Pháp lý đầu tư", "Doanh Nghiệp", "Dự án"], img: "https://congtyluatacc.vn/wp-content/uploads/2025/11/z7271235355390_f42f8fd6ff429a1a9b6fc33cf34d0746.jpg" }, 	
    { category: "LUẬT SƯ", title: "NGUYỄN THỊ HOÀI THẮM", desc: "Luật sư Nguyễn Thị Hoài Thắm sở hữu thế mạnh nổi bật trong việc tư vấn, soạn thảo và xử lý rủi ro liên quan đến hợp đồng. Với tư duy phân tích sắc bén và khả năng kiểm soát chi tiết cao.", tags: ["Rủi ro pháp lý", "Hợp Đồng", "Soạn thảo hợp đồng"], img: "https://congtyluatacc.vn/wp-content/uploads/2025/11/BeautyPlus-image-extender.jpeg" },
    { category: "LUẬT SƯ", title: "TRẦN THỊ HUẾ", desc: "Luật sư Trần Thị Huế là thành viên tận tâm của đội ngũ pháp lý Công ty Luật ACC, đảm nhiệm việc hỗ trợ pháp lý tổng hợp cho khách hàng cá nhân và doanh nghiệp.", tags: ["Pháp lý tổng hợp", "Tư vấn pháp luật", "Hỗ trợ khách hàng"], img: "https://congtyluatacc.vn/wp-content/uploads/2025/11/z7271236585450_8c34b9a79961e364948c8519559b0489-1.jpg" },
    { category: "LUẬT SƯ", title: "VÕ DUY TIẾN", desc: "Luật sư Võ Duy Tiến là thành viên tận tâm của đội ngũ pháp lý Công ty Luật ACC, đảm nhiệm việc hỗ trợ pháp lý tổng hợp cho khách hàng cá nhân và doanh nghiệp.", tags: ["Pháp lý tổng hợp", "Tư vấn pháp luật", "Hỗ trợ khách hàng"], img: "https://congtyluatacc.vn/wp-content/uploads/2025/12/z7312170712871_5556d40055d5aab14cc26c13769805d2.jpg" },
];

export const REASONS = [
    { icon: ShieldCheck, title: "Đội ngũ luật sư giỏi", desc: "Kinh nghiệm chuyên sâu đa lĩnh vực." },
    { icon: Banknote, title: "Chi phí hợp lý", desc: "Minh bạch, tối ưu, không phí ẩn." },
    { icon: Clock, title: "Xử lý nhanh chóng", desc: "Tiết kiệm thời gian, đúng tiến độ." },
    { icon: Heart, title: "Tư vấn tận tâm", desc: "Luôn lắng nghe và thấu hiểu." },
    { icon: Lock, title: "Bảo mật tuyệt đối", desc: "Giữ bí mật mọi thông tin khách hàng." },
];

export const PRESS: PressItem[] = [
    { id: 1, title: "Top 10 công ty luật uy tín hàng đầu Việt Nam", source: "Đồng Khởi", logo: "https://congtyluatacc.vn/wp-content/uploads/2025/12/logo.png", img: "https://congtyluatacc.vn/wp-content/uploads/2025/12/cong-ty-luat1.png", link: "https://dongkhoi.baovinhlong.vn/top-10-cong-ty-luat-uy-tin-hang-dau-viet-nam-08042025-a144852.html?gidzl=ojacOrszOYB4m2LjKwTh9CF196HCyJDwsvHyDXppQ7U9aoOvIVCq8j6PUpaH_smYrPj_RcMXKtPuNxbdBm" },
    { id: 2, title: "Top 10 Công ty Luật lớn uy tín tại Thành phố Hồ Chí Minh", source: "Biên Phòng", logo: "https://congtyluatacc.vn/wp-content/uploads/2025/12/logo-bienphong-scaled.jpg", img: "https://congtyluatacc.vn/wp-content/uploads/2025/12/98103951amimage001.jpg", link: "https://www.bienphong.com.vn/top-10-cong-ty-luat-lon-uy-tin-tai-thanh-pho-ho-chi-minh-post489193.html" },
    { id: 3, title: "Công ty Luật ACC - Dịch vụ làm visa nhanh tại Đà Nẵng", source: "Đà Nẵng", logo: "https://congtyluatacc.vn/wp-content/uploads/2025/12/logodn.png", img: "https://congtyluatacc.vn/wp-content/uploads/2025/12/baodanang.vn-dataimages-202506-original-_images1781797_c1.jpg", link: "https://baodanang.vn/cong-ty-luat-acc-dich-vu-lam-visa-nhanh-tai-da-nang-3295645.html" },
    { id: 4, title: "Top 10 công ty luật, văn phòng luật sư uy tín lớn tại thành phố Hồ Chí Minh", source: "Hà Nội Mới", logo: "https://congtyluatacc.vn/wp-content/uploads/2025/12/logohanoimoi.png", img: "https://congtyluatacc.vn/wp-content/uploads/2025/12/z7153216404750_51443026af8abd4efec79b82e348e497.jpg", link: "https://hanoimoi.vn/top-10-cong-ty-luat-van-phong-luat-su-uy-tin-lon-tai-thanh-pho-ho-chi-minh-720873.html?gidzl=9y5TMrfxM2Wfs5vLL65HBYxQLb9BD01-DeyE01isMtDaY5GFJZO79Zo22GyMEbycE80DM6LBZJTAM7zT9G" }
];

export const BRANCHES: Branch[] = [
    {
        id: 'hcm',
        title: "CHI NHÁNH TP. HỒ CHÍ MINH",
        address: "Tầng 3, 39 Hoàng Việt, phường Tân Sơn Nhất, TP. Hồ Chí Minh.",
        phone: "084.696.7979",
        email: "info@accgroup.vn",
        zalo: "Công ty Luật ACC",
        hotline: "1900.3330"
    },
    {
        id: 'hanoi',
        title: "CHI NHÁNH TP. HÀ NỘI",
        address: "Tầng 5A, 298 Cầu Giấy, Phường Cầu Giấy, TP. Hà Nội.",
        phone: "084.696.7979",
        email: "info@accgroup.vn",
        zalo: "Công ty ACC",
        hotline: "1900.3330"
    },
    {
        id: 'danang',
        title: "CHI NHÁNH TP. ĐÀ NẴNG",
        address: "432 Nguyễn Tri Phương, phường Hòa Cường, TP. Đà Nẵng.",
        phone: "084.696.7979",
        email: "info@accgroup.vn",
        zalo: "Công ty ACC",
        hotline: "1900.3330"
    },
    {
        id: 'office',
        title: "VĂN PHÒNG GIAO DỊCH",
        address: "Tầng 4, Tòa nhà Viettel, 205A Lê Hồng Phong, TP. Vũng Tàu.",
        phone: "084.696.7979",
        email: "info@accgroup.vn",
        zalo: "Công ty ACC",
        hotline: "1900.3330",
        sub: [
             { label: "Bình Dương", address: "121 Đường Trần Bình Trọng, TP. Thủ Dầu Một." }
        ]
    }
];

// Updated images to be generic Law/Office images, not portraits
export const MOCK_POSTS: WordPressPost[] = [
    {
        id: 101,
        date: "2024-03-15T10:00:00",
        link: "/post/101",
        title: { rendered: "Thủ Tục Thành Lập Công Ty TNHH Mới Nhất 2024" },
        excerpt: { rendered: "Hướng dẫn chi tiết quy trình, hồ sơ và thủ tục thành lập công ty TNHH 1 thành viên và 2 thành viên trở lên theo Luật Doanh nghiệp 2020. Bài viết cung cấp cái nhìn tổng quan về các bước cần thiết, từ chuẩn bị hồ sơ đến nhận giấy phép." },
        content: { rendered: `
            <p><strong>Thành lập công ty TNHH</strong> là lựa chọn phổ biến của nhiều doanh nhân tại Việt Nam nhờ vào tính linh hoạt và an toàn pháp lý. Dưới đây là hướng dẫn chi tiết:</p>
            <h3>1. Chuẩn bị hồ sơ</h3>
            <p>Hồ sơ bao gồm: Giấy đề nghị đăng ký doanh nghiệp, Điều lệ công ty, Danh sách thành viên (đối với TNHH 2 thành viên), Bản sao giấy tờ pháp lý của cá nhân/tổ chức.</p>
            <h3>2. Nộp hồ sơ tại Phòng Đăng ký kinh doanh</h3>
            <p>Doanh nghiệp có thể nộp trực tiếp hoặc qua mạng điện tử. Thời gian giải quyết thường là 03 ngày làm việc.</p>
            <h3>3. Công bố nội dung đăng ký doanh nghiệp</h3>
            <p>Sau khi được cấp Giấy chứng nhận đăng ký doanh nghiệp, doanh nghiệp phải thông báo công khai trên Cổng thông tin quốc gia về đăng ký doanh nghiệp.</p>
            <p><em>Liên hệ ACC Group để được hỗ trợ trọn gói dịch vụ thành lập doanh nghiệp.</em></p>
        ` },
        _embedded: { 'wp:featuredmedia': [{ source_url: "https://congtyluatacc.vn/wp-content/uploads/2025/07/still-life-with-scales-justice-scaled.jpg" }] }
    },
    {
        id: 102,
        date: "2024-03-10T09:30:00",
        link: "/post/102",
        title: { rendered: "Quy Định Mới Về Sổ Đỏ, Sổ Hồng Năm 2024" },
        excerpt: { rendered: "Luật Đất đai sửa đổi có nhiều điểm mới liên quan đến cấp Giấy chứng nhận quyền sử dụng đất. Tìm hiểu ngay những thay đổi quan trọng ảnh hưởng trực tiếp đến quyền lợi người dân." },
        content: { rendered: `
            <p>Luật Đất đai 2024 mang đến nhiều thay đổi tích cực nhằm bảo vệ quyền lợi người sử dụng đất và minh bạch hóa thị trường bất động sản.</p>
            <h3>1. Mở rộng đối tượng được cấp Sổ đỏ</h3>
            <p>Đất không có giấy tờ trước ngày 01/7/2014 nay có cơ hội được cấp Giấy chứng nhận nếu đáp ứng đủ điều kiện về sử dụng ổn định và không tranh chấp.</p>
            <h3>2. Bỏ khung giá đất</h3>
            <p>Việc bỏ khung giá đất và áp dụng bảng giá đất sát với giá thị trường sẽ giúp người dân được đền bù thỏa đáng hơn khi bị thu hồi đất.</p>
            <blockquote>ACC Group sẵn sàng tư vấn các thủ tục pháp lý liên quan đến đất đai, thừa kế và tranh chấp quyền sử dụng đất.</blockquote>
        ` },
        _embedded: { 'wp:featuredmedia': [{ source_url: "https://congtyluatacc.vn/wp-content/uploads/2025/07/still-life-with-scales-justice-1-scaled.jpg" }] }
    },
    {
        id: 103,
        date: "2024-03-05T14:15:00",
        link: "/post/103",
        title: { rendered: "Thủ Tục Ly Hôn Đơn Phương Cần Những Giấy Tờ Gì?" },
        excerpt: { rendered: "Ly hôn đơn phương là thủ tục phức tạp cần sự chuẩn bị kỹ lưỡng về hồ sơ và chứng cứ. Bài viết này sẽ liệt kê đầy đủ các giấy tờ cần thiết để Tòa án thụ lý nhanh chóng." },
        content: { rendered: `
            <p>Khi cuộc sống hôn nhân lâm vào tình trạng trầm trọng, đời sống chung không thể kéo dài, ly hôn là giải pháp cuối cùng.</p>
            <h3>Hồ sơ ly hôn đơn phương gồm:</h3>
            <ul>
                <li>Đơn khởi kiện về việc ly hôn.</li>
                <li>Giấy chứng nhận đăng ký kết hôn (bản chính).</li>
                <li>CMND/CCCD của vợ và chồng (bản sao chứng thực).</li>
                <li>Sổ hộ khẩu (bản sao chứng thực).</li>
                <li>Giấy khai sinh của các con (nếu có).</li>
                <li>Giấy tờ chứng minh quyền sở hữu tài sản (nếu có tranh chấp).</li>
            </ul>
            <p>Quá trình giải quyết ly hôn đơn phương thường kéo dài từ 4-6 tháng. Luật sư ACC sẽ đồng hành cùng bạn để bảo vệ quyền nuôi con và phân chia tài sản hợp lý.</p>
        ` },
        _embedded: { 'wp:featuredmedia': [{ source_url: "https://congtyluatacc.vn/wp-content/uploads/2025/07/still-life-with-scales-justice-scaled.jpg" }] }
    },
    {
        id: 104,
        date: "2024-02-28T08:00:00",
        link: "/post/104",
        title: { rendered: "Điều Kiện Và Thủ Tục Cấp Giấy Phép Lao Động Cho Người Nước Ngoài" },
        excerpt: { rendered: "Doanh nghiệp muốn sử dụng lao động nước ngoài cần tuân thủ nghiêm ngặt các quy định về cấp giấy phép lao động (Work Permit). Cập nhật quy trình mới nhất tại đây." },
        content: { rendered: "<p>Nội dung chi tiết về giấy phép lao động...</p>" },
        _embedded: { 'wp:featuredmedia': [{ source_url: "https://congtyluatacc.vn/wp-content/uploads/2025/07/still-life-with-scales-justice-1-scaled.jpg" }] }
    },
    {
        id: 105,
        date: "2024-02-20T11:45:00",
        link: "/post/105",
        title: { rendered: "5 Lưu Ý Quan Trọng Khi Ký Kết Hợp Đồng Thương Mại" },
        excerpt: { rendered: "Hợp đồng thương mại là xương sống của mọi giao dịch kinh doanh. Để tránh rủi ro pháp lý, doanh nghiệp cần đặc biệt lưu ý 5 điều khoản cốt lõi sau đây." },
        content: { rendered: "<p>Nội dung chi tiết về hợp đồng thương mại...</p>" },
        _embedded: { 'wp:featuredmedia': [{ source_url: "https://congtyluatacc.vn/wp-content/uploads/2025/07/still-life-with-scales-justice-scaled.jpg" }] }
    },
    {
        id: 106,
        date: "2024-02-15T09:00:00",
        link: "/post/106",
        title: { rendered: "Luật Đầu Tư 2024: Những Điểm Mới Nhà Đầu Tư Cần Biết" },
        excerpt: { rendered: "Cập nhật các thay đổi trong Luật Đầu tư mới nhất, ảnh hưởng trực tiếp đến quy trình cấp giấy phép và ưu đãi đầu tư cho doanh nghiệp nước ngoài tại Việt Nam." },
        content: { rendered: "<p>Nội dung chi tiết về luật đầu tư...</p>" },
        _embedded: { 'wp:featuredmedia': [{ source_url: "https://congtyluatacc.vn/wp-content/uploads/2025/07/still-life-with-scales-justice-1-scaled.jpg" }] }
    }
];