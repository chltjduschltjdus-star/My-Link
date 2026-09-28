export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <main className="w-full max-w-sm rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 p-8 shadow-sm text-center flex flex-col items-center">
        {/* 프로필 아바타 */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white flex items-center justify-center text-3xl font-bold shadow-md shadow-indigo-500/20 mb-5 select-none">
          최
        </div>

        {/* 뱃지 */}
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-950/60 rounded-full mb-3">
          VIBE CODER
        </span>

        {/* 이름 */}
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          최서연
        </h1>

        {/* 소개글 */}
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed break-keep mb-6">
          사용자 중심의 가치를 고민하며 직관적인 서비스를 만들어가는 개발자입니다. 새로운 기술을 탐구하고 문제를 해결하는 과정에 몰입합니다.
        </p>

        {/* 관심사 태그 */}
        <div className="flex flex-wrap justify-center gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 w-full">
          <span className="px-2.5 py-1 text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-md">
            💻 개발 & 코딩
          </span>
          <span className="px-2.5 py-1 text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-md">
            🎓 대학생
          </span>
          <span className="px-2.5 py-1 text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-md">
            ✨ 성장 중
          </span>
        </div>
      </main>
    </div>
  );
}
