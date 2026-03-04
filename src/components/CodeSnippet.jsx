const CodeSnippet = () => {
  const code = `// Kotlin Coroutines - ViewModel Example
class MainViewModel(
    private val repository: UserRepository
) : ViewModel() {

    // StateFlow for UI state
    private val _uiState = MutableStateFlow<UiState>(UiState.Loading)
    val uiState: StateFlow<UiState> = _uiState.asStateFlow()

    // Channel for one-time events
    private val _events = Channel<UiEvent>()
    val events = _events.receiveAsFlow()

    // Main fetch function
    fun fetchUsers() {
        viewModelScope.launch {
            _uiState.value = UiState.Loading
            
            repository.getUsers()
                .catch { e ->
                    _uiState.value = UiState.Error(e.message)
                    _events.send(UiEvent.ShowError(e.message))
                }
                .collect { users ->
                    _uiState.value = UiState.Success(users)
                }
        }
    }

    // Parallel execution with coroutines
    fun loadUserData() {
        viewModelScope.launch {
            try {
                // Execute multiple requests in parallel
                val deferredUsers = async { repository.getUsers() }
                val deferredPosts = async { repository.getPosts() }
                val deferredAlbums = async { repository.getAlbums() }

                // Wait for all to complete
                val users = deferredUsers.await()
                val posts = deferredPosts.await()
                val albums = deferredAlbums.await()

                // Combine results
                _uiState.value = UiState.Success(
                    combineData(users, posts, albums)
                )
            } catch (e: Exception) {
                _uiState.value = UiState.Error(e.message)
            }
        }
    }
}`;

  const features = [
    { title: 'StateFlow', desc: 'Reactive state management' },
    { title: 'ViewModelScope', desc: 'Structured concurrency' },
    { title: 'Async/Await', desc: 'Parallel execution' },
    { title: 'Error Handling', desc: 'Flow catch & collect' },
  ];

  return (
    <section id="code" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Code <span className="gradient-text">Snippet</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Clean, modern Kotlin code using coroutines and modern Android architecture patterns
          </p>
        </div>

        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto">
          <div className="terminal-window">
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span className="ml-4 text-sm text-gray-400">MainViewModel.kt — Kotlin</span>
            </div>

            {/* Terminal Body */}
            <div className="terminal-body overflow-x-auto">
              <pre className="text-sm">
                <code>
                  {code.split('\n').map((line, i) => (
                    <div key={i}>
                      <span className="text-gray-600 select-none w-8 inline-block text-right mr-4">
                        {i + 1}
                      </span>
                      <span className={getLineColor(line)}>
                        {highlightSyntax(line)}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card p-4 rounded-xl text-center hover:scale-105 transition-transform"
            >
              <h3 className="text-primary font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to colorize code
const getLineColor = (line) => {
  const trimmed = line.trim();
  if (trimmed.startsWith('//') || trimmed.startsWith('/*')) return 'text-gray-500';
  if (trimmed.startsWith('import') || trimmed.startsWith('package')) return 'text-purple-400';
  if (trimmed.includes('class ') || trimmed.includes('fun ')) return 'text-blue-400';
  if (trimmed.includes('val ') || trimmed.includes('var ')) return 'text-yellow-400';
  if (trimmed.includes('return ') || trimmed.includes('throw ')) return 'text-red-400';
  if (trimmed.includes('try') || trimmed.includes('catch') || trimmed.includes('finally')) return 'text-orange-400';
  return 'text-gray-300';
};

// Helper function to highlight keywords
const highlightSyntax = (line) => {
  const keywords = [
    'class', 'fun', 'val', 'var', 'private', 'public', 'suspend',
    'launch', 'async', 'await', 'catch', 'try', 'finally', 'throw',
    'return', 'new', 'override', 'interface', 'object', 'companion'
  ];
  
  let result = line;
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
    result = result.replace(regex, `<span class="text-secondary">$1</span>`);
  });
  
  // Highlight strings
  result = result.replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>');
  
  // Highlight comments
  if (line.trim().startsWith('//')) {
    return <span className="text-gray-500">{line}</span>;
  }
  
  return <span dangerouslySetInnerHTML={{ __html: result }} />;
};

export default CodeSnippet;

