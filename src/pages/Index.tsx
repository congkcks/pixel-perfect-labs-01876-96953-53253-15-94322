import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, MessageCircle, Plus, BookOpen, FileText, BookMarked, BookText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple/10 via-primary/10 to-info/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-info/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple via-primary to-info bg-clip-text text-transparent animate-scale-in">
            Phần Luyện Tập Kĩ Năng
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Nâng cao kỹ năng ngôn ngữ của bạn với AI thông minh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link to="/create-lesson" className="group animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer bg-gradient-to-br from-success/10 to-success/20 border-success/30 hover:border-success/50 hover:bg-gradient-to-br hover:from-success/20 hover:to-success/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-success/20 rounded-full group-hover:bg-success/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <FileText className="w-12 h-12 text-success" />
                </div>
                <h2 className="text-2xl font-bold group-hover:text-success transition-colors">Bài Viết</h2>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  Tạo và quản lý bài viết học tập
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/listening-practice" className="group animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer bg-gradient-to-br from-primary/10 to-primary/20 border-primary/30 hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/20 hover:to-primary/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Headphones className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">Bài Nghe</h2>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  Thực hành nghe với audio, transcript và dịch nghĩa
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/flashcard-groups" className="group animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer bg-gradient-to-br from-info/10 to-info/20 border-info/30 hover:border-info/50 hover:bg-gradient-to-br hover:from-info/20 hover:to-info/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-info/20 rounded-full group-hover:bg-info/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <BookMarked className="w-12 h-12 text-info" />
                </div>
                <h2 className="text-2xl font-bold group-hover:text-info transition-colors">Từ Vựng</h2>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  Học từ vựng với flashcard và trò chơi
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/grammar-practice" className="group animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer bg-gradient-to-br from-purple/10 to-purple/20 border-purple/30 hover:border-purple/50 hover:bg-gradient-to-br hover:from-purple/20 hover:to-purple/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-purple/20 rounded-full group-hover:bg-purple/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <BookOpen className="w-12 h-12 text-purple" />
                </div>
                <h2 className="text-2xl font-bold group-hover:text-purple transition-colors">Ngữ Pháp</h2>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  Luyện tập ngữ pháp với các bài tập tương tác
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/conversation-practice" className="group animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer bg-gradient-to-br from-warning/10 to-warning/20 border-warning/30 hover:border-warning/50 hover:bg-gradient-to-br hover:from-warning/20 hover:to-warning/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-warning/20 rounded-full group-hover:bg-warning/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <MessageCircle className="w-12 h-12 text-warning" />
                </div>
                <h2 className="text-2xl font-bold group-hover:text-warning transition-colors">Luyện Nói</h2>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  Thực hành giao tiếp với AI thông minh
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/reading-config" className="group animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer bg-gradient-to-br from-success/10 to-info/20 border-success/30 hover:border-success/50 hover:bg-gradient-to-br hover:from-success/20 hover:to-info/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-success/20 rounded-full group-hover:bg-success/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <BookText className="w-12 h-12 text-success" />
                </div>
                <h2 className="text-2xl font-bold group-hover:text-success transition-colors">Luyện Đọc</h2>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  Rèn luyện kỹ năng đọc hiểu với bài tập tương tác
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/toeic-tests" className="group animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer bg-gradient-to-br from-primary/10 to-info/20 border-primary/30 hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/20 hover:to-info/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <FileText className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">Đề Thi TOEIC</h2>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  Luyện tập với đề thi TOEIC Reading thực tế
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/test-list" className="group animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer bg-gradient-to-br from-destructive/10 to-warning/20 border-destructive/30 hover:border-destructive/50 hover:bg-gradient-to-br hover:from-destructive/20 hover:to-warning/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-destructive/20 rounded-full group-hover:bg-destructive/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Plus className="w-12 h-12 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold group-hover:text-destructive transition-colors">Luyện Đề</h2>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  Luyện tập với các đề thi TOEIC thật
                </p>
              </div>
            </Card>
          </Link>
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/20 via-purple/20 to-info/20 border-primary/30 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary via-purple to-info bg-clip-text text-transparent">
              ✨ Tính năng nổi bật
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <h4 className="font-semibold mb-2 text-lg flex items-center gap-2">
                  <span className="text-2xl">🎧</span> Luyện nghe tương tác
                </h4>
                <p className="text-sm text-muted-foreground">
                  Audio chất lượng cao với transcript và phím tắt tiện lợi
                </p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <h4 className="font-semibold mb-2 text-lg flex items-center gap-2">
                  <span className="text-2xl">🤖</span> AI thông minh
                </h4>
                <p className="text-sm text-muted-foreground">
                  Gợi ý từ vựng, cấu trúc câu và phản hồi theo thời gian thực
                </p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <h4 className="font-semibold mb-2 text-lg flex items-center gap-2">
                  <span className="text-2xl">📊</span> Theo dõi tiến độ
                </h4>
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