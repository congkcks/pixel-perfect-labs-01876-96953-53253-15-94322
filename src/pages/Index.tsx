import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, MessageCircle, Plus, BookOpen, FileText, BookMarked, BookText, CheckSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">UTC-EngLish</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Trang chủ
              </Link>
              <Link to="/flashcard-groups" className="text-muted-foreground hover:text-primary transition-colors">
                Khóa học
              </Link>
              <Link to="/test-list" className="text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                Đăng nhập
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Login Notice */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <CheckSquare className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Không cần đăng nhập - Sử dụng ngay!</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nâng cao kỹ năng tiếng Anh với{" "}
            <span className="text-primary">UTC-EngLish</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Công cụ học tiếng Anh thông minh giúp bạn tra từ, tạo bài tập và luyện tập với AI chỉ trong một nền tảng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link to="/create-lesson" className="group">
            <Card className="p-8 h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-success/5 to-success/10 border-success/20">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-success/10 rounded-full group-hover:bg-success/20 transition-colors">
                  <FileText className="w-12 h-12 text-success" />
                </div>
                <h2 className="text-2xl font-bold">Bài Viết</h2>
                <p className="text-muted-foreground">
                  Tạo và quản lý bài viết học tập
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/listening-practice" className="group">
            <Card className="p-8 h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Headphones className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Bài Nghe</h2>
                <p className="text-muted-foreground">
                  Thực hành nghe với audio, transcript và dịch nghĩa
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/flashcard-groups" className="group">
            <Card className="p-8 h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-info/5 to-info/10 border-info/20">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-info/10 rounded-full group-hover:bg-info/20 transition-colors">
                  <BookMarked className="w-12 h-12 text-info" />
                </div>
                <h2 className="text-2xl font-bold">Từ Vựng</h2>
                <p className="text-muted-foreground">
                  Học từ vựng với flashcard và trò chơi
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/grammar-practice" className="group">
            <Card className="p-8 h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-purple/5 to-purple/10 border-purple/20">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-purple/10 rounded-full group-hover:bg-purple/20 transition-colors">
                  <BookOpen className="w-12 h-12 text-purple" />
                </div>
                <h2 className="text-2xl font-bold">Ngữ Pháp</h2>
                <p className="text-muted-foreground">
                  Luyện tập ngữ pháp với các bài tập tương tác
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/conversation-practice" className="group">
            <Card className="p-8 h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-orange-500/5 to-orange-500/10 border-orange-500/20">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-orange-500/10 rounded-full group-hover:bg-orange-500/20 transition-colors">
                  <MessageCircle className="w-12 h-12 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold">Luyện Nói</h2>
                <p className="text-muted-foreground">
                  Thực hành giao tiếp với AI thông minh
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/reading-config" className="group">
            <Card className="p-8 h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-teal-500/5 to-teal-500/10 border-teal-500/20">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-teal-500/10 rounded-full group-hover:bg-teal-500/20 transition-colors">
                  <BookText className="w-12 h-12 text-teal-500" />
                </div>
                <h2 className="text-2xl font-bold">Luyện Đọc</h2>
                <p className="text-muted-foreground">
                  Rèn luyện kỹ năng đọc hiểu với bài tập tương tác
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/toeic-tests" className="group">
            <Card className="p-8 h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/20">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <FileText className="w-12 h-12 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold">Đề Thi TOEIC</h2>
                <p className="text-muted-foreground">
                  Luyện tập với đề thi TOEIC Reading thực tế
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/test-list" className="group">
            <Card className="p-8 h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-warning/5 to-warning/10 border-warning/20">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-warning/10 rounded-full group-hover:bg-warning/20 transition-colors">
                  <Plus className="w-12 h-12 text-warning" />
                </div>
                <h2 className="text-2xl font-bold">Luyện Đề</h2>
                <p className="text-muted-foreground">
                  Luyện tập với các đề thi TOEIC thật
                </p>
              </div>
            </Card>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-card border-border">
            <h3 className="text-2xl font-bold mb-4">✨ Tính năng nổi bật</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">🎧 Luyện nghe tương tác</h4>
                <p className="text-sm text-muted-foreground">
                  Audio chất lượng cao với transcript và phím tắt tiện lợi
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🤖 AI thông minh</h4>
                <p className="text-sm text-muted-foreground">
                  Gợi ý từ vựng, cấu trúc câu và phản hồi theo thời gian thực
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📊 Theo dõi tiến độ</h4>
                <p className="text-sm text-muted-foreground">
                  Hệ thống điểm và cấp độ giúp đo lường sự tiến bộ
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;