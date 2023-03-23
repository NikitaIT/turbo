(function() {var implementors = {
"auto_hash_map":[["impl&lt;K, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"auto_hash_map/set/struct.AutoSet.html\" title=\"struct auto_hash_map::set::AutoSet\">AutoSet</a>&lt;K, H&gt;"],["impl&lt;K, V, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"auto_hash_map/map/enum.AutoMap.html\" title=\"enum auto_hash_map::map::AutoMap\">AutoMap</a>&lt;K, V, H&gt;"]],
"node_file_trace":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"node_file_trace/struct.CacheArgs.html\" title=\"struct node_file_trace::CacheArgs\">CacheArgs</a>"]],
"turbo_tasks":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks/struct.InvalidationReasonSet.html\" title=\"struct turbo_tasks::InvalidationReasonSet\">InvalidationReasonSet</a>"],["impl&lt;T, const INITIAL_CAPACITY_BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks/util/struct.NoMoveVec.html\" title=\"struct turbo_tasks::util::NoMoveVec\">NoMoveVec</a>&lt;T, INITIAL_CAPACITY_BITS&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks/struct.CompletionVc.html\" title=\"struct turbo_tasks::CompletionVc\">CompletionVc</a>"],["impl&lt;StoreImpl, Node&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks/graph/struct.SkipDuplicates.html\" title=\"struct turbo_tasks::graph::SkipDuplicates\">SkipDuplicates</a>&lt;StoreImpl, Node&gt;<span class=\"where fmt-newline\">where\n    StoreImpl: <a class=\"trait\" href=\"turbo_tasks/graph/trait.GraphStore.html\" title=\"trait turbo_tasks::graph::GraphStore\">GraphStore</a>&lt;Node&gt;,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks/backend/struct.CellContent.html\" title=\"struct turbo_tasks::backend::CellContent\">CellContent</a>"],["impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks/util/struct.OnceConcurrentlyMap.html\" title=\"struct turbo_tasks::util::OnceConcurrentlyMap\">OnceConcurrentlyMap</a>&lt;K, V&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks/struct.State.html\" title=\"struct turbo_tasks::State\">State</a>&lt;T&gt;"],["impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks/util/struct.SafeOnceConcurrentlyMap.html\" title=\"struct turbo_tasks::util::SafeOnceConcurrentlyMap\">SafeOnceConcurrentlyMap</a>&lt;K, V&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"turbo_tasks/persisted_graph/enum.TaskCell.html\" title=\"enum turbo_tasks::persisted_graph::TaskCell\">TaskCell</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&lt;Target = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks/util/struct.IdFactory.html\" title=\"struct turbo_tasks::util::IdFactory\">IdFactory</a>&lt;T&gt;"],["impl&lt;const P: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks/small_duration/struct.SmallDuration.html\" title=\"struct turbo_tasks::small_duration::SmallDuration\">SmallDuration</a>&lt;P&gt;"],["impl&lt;T: <a class=\"trait\" href=\"turbo_tasks/trait.Typed.html\" title=\"trait turbo_tasks::Typed\">Typed</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks/struct.Value.html\" title=\"struct turbo_tasks::Value\">Value</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks/graph/struct.NonDeterministic.html\" title=\"struct turbo_tasks::graph::NonDeterministic\">NonDeterministic</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks/graph/struct.ReverseTopological.html\" title=\"struct turbo_tasks::graph::ReverseTopological\">ReverseTopological</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"]],
"turbo_tasks_bytes":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks_bytes/stream/struct.Stream.html\" title=\"struct turbo_tasks_bytes::stream::Stream\">Stream</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks_bytes/bytes/struct.Bytes.html\" title=\"struct turbo_tasks_bytes::bytes::Bytes\">Bytes</a>"]],
"turbo_tasks_fs":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks_fs/struct.ReadGlobResult.html\" title=\"struct turbo_tasks_fs::ReadGlobResult\">ReadGlobResult</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks_fs/rope/struct.RopeBuilder.html\" title=\"struct turbo_tasks_fs::rope::RopeBuilder\">RopeBuilder</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks_fs/rope/struct.Rope.html\" title=\"struct turbo_tasks_fs::rope::Rope\">Rope</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks_fs/struct.FileMeta.html\" title=\"struct turbo_tasks_fs::FileMeta\">FileMeta</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"turbo_tasks_fs/enum.Permissions.html\" title=\"enum turbo_tasks_fs::Permissions\">Permissions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks_fs/rope/struct.RopeReader.html\" title=\"struct turbo_tasks_fs::rope::RopeReader\">RopeReader</a>"]],
"turbo_tasks_hash":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks_hash/struct.Xxh3Hash64Hasher.html\" title=\"struct turbo_tasks_hash::Xxh3Hash64Hasher\">Xxh3Hash64Hasher</a>"]],
"turbo_tasks_macros_shared":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks_macros_shared/struct.ValueTraitArguments.html\" title=\"struct turbo_tasks_macros_shared::ValueTraitArguments\">ValueTraitArguments</a>"]],
"turbo_tasks_memory":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks_memory/struct.MemoryBackend.html\" title=\"struct turbo_tasks_memory::MemoryBackend\">MemoryBackend</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks_memory/stats/struct.ExportedTaskStats.html\" title=\"struct turbo_tasks_memory::stats::ExportedTaskStats\">ExportedTaskStats</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"turbo_tasks_memory/scope/enum.TaskScopes.html\" title=\"enum turbo_tasks_memory::scope::TaskScopes\">TaskScopes</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks_memory/stats/struct.Stats.html\" title=\"struct turbo_tasks_memory::stats::Stats\">Stats</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks_memory/stats/struct.ReferenceStats.html\" title=\"struct turbo_tasks_memory::stats::ReferenceStats\">ReferenceStats</a>"]],
"turbo_tasks_testing":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbo_tasks_testing/struct.VcStorage.html\" title=\"struct turbo_tasks_testing::VcStorage\">VcStorage</a>"]],
"turbopack":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack/module_options/module_options_context/struct.DecoratorsOptions.html\" title=\"struct turbopack::module_options::module_options_context::DecoratorsOptions\">DecoratorsOptions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack/module_options/module_options_context/struct.PostCssTransformOptions.html\" title=\"struct turbopack::module_options::module_options_context::PostCssTransformOptions\">PostCssTransformOptions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack/resolve_options_context/struct.ResolveOptionsContext.html\" title=\"struct turbopack::resolve_options_context::ResolveOptionsContext\">ResolveOptionsContext</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack/module_options/module_options_context/struct.ModuleOptionsContextVc.html\" title=\"struct turbopack::module_options::module_options_context::ModuleOptionsContextVc\">ModuleOptionsContextVc</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack/module_options/module_options_context/struct.WebpackLoadersOptions.html\" title=\"struct turbopack::module_options::module_options_context::WebpackLoadersOptions\">WebpackLoadersOptions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack/module_options/module_options_context/struct.JsxTransformOptions.html\" title=\"struct turbopack::module_options::module_options_context::JsxTransformOptions\">JsxTransformOptions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack/module_options/module_options_context/struct.DecoratorsOptionsVc.html\" title=\"struct turbopack::module_options::module_options_context::DecoratorsOptionsVc\">DecoratorsOptionsVc</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack/module_options/module_options_context/struct.TypescriptTransformOptionsVc.html\" title=\"struct turbopack::module_options::module_options_context::TypescriptTransformOptionsVc\">TypescriptTransformOptionsVc</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack/module_options/module_options_context/struct.TypescriptTransformOptions.html\" title=\"struct turbopack::module_options::module_options_context::TypescriptTransformOptions\">TypescriptTransformOptions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack/module_options/module_options_context/struct.ModuleOptionsContext.html\" title=\"struct turbopack::module_options::module_options_context::ModuleOptionsContext\">ModuleOptionsContext</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack/resolve_options_context/struct.ResolveOptionsContextVc.html\" title=\"struct turbopack::resolve_options_context::ResolveOptionsContextVc\">ResolveOptionsContextVc</a>"]],
"turbopack_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"turbopack_core/environment/enum.Rendering.html\" title=\"enum turbopack_core::environment::Rendering\">Rendering</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_core/resolve/options/struct.ResolvedMap.html\" title=\"struct turbopack_core::resolve::options::ResolvedMap\">ResolvedMap</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"turbopack_core/resolve/pattern/enum.Pattern.html\" title=\"enum turbopack_core::resolve::pattern::Pattern\">Pattern</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_core/resolve/struct.ResolveResult.html\" title=\"struct turbopack_core::resolve::ResolveResult\">ResolveResult</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_core/chunk/optimize/struct.ContainmentTree.html\" title=\"struct turbopack_core::chunk::optimize::ContainmentTree\">ContainmentTree</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_core/environment/struct.ServerAddr.html\" title=\"struct turbopack_core::environment::ServerAddr\">ServerAddr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_core/environment/struct.NodeJsVersionVc.html\" title=\"struct turbopack_core::environment::NodeJsVersionVc\">NodeJsVersionVc</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"turbopack_core/environment/enum.ChunkLoading.html\" title=\"enum turbopack_core::environment::ChunkLoading\">ChunkLoading</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_core/code_builder/struct.CodeBuilder.html\" title=\"struct turbopack_core::code_builder::CodeBuilder\">CodeBuilder</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_core/resolve/struct.AliasMap.html\" title=\"struct turbopack_core::resolve::AliasMap\">AliasMap</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_core/resolve/options/struct.ResolveOptions.html\" title=\"struct turbopack_core::resolve::options::ResolveOptions\">ResolveOptions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_core/resolve/options/struct.ImportMap.html\" title=\"struct turbopack_core::resolve::options::ImportMap\">ImportMap</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_core/resolve/struct.ResolveAliasMap.html\" title=\"struct turbopack_core::resolve::ResolveAliasMap\">ResolveAliasMap</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_core/target/struct.CompileTargetVc.html\" title=\"struct turbopack_core::target::CompileTargetVc\">CompileTargetVc</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"turbopack_core/chunk/enum.ChunkingType.html\" title=\"enum turbopack_core::chunk::ChunkingType\">ChunkingType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_core/source_pos/struct.SourcePos.html\" title=\"struct turbopack_core::source_pos::SourcePos\">SourcePos</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_core/environment/struct.NodeJsEnvironment.html\" title=\"struct turbopack_core::environment::NodeJsEnvironment\">NodeJsEnvironment</a>"]],
"turbopack_create_test_app":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_create_test_app/test_app_builder/struct.PackageJsonConfig.html\" title=\"struct turbopack_create_test_app::test_app_builder::PackageJsonConfig\">PackageJsonConfig</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_create_test_app/test_app_builder/struct.TestAppBuilder.html\" title=\"struct turbopack_create_test_app::test_app_builder::TestAppBuilder\">TestAppBuilder</a>"]],
"turbopack_dev_server":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_dev_server/source/specificity/struct.Specificity.html\" title=\"struct turbopack_dev_server::source::specificity::Specificity\">Specificity</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_dev_server/source/struct.ContentSourceData.html\" title=\"struct turbopack_dev_server::source::ContentSourceData\">ContentSourceData</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_dev_server/source/query/struct.Query.html\" title=\"struct turbopack_dev_server::source::query::Query\">Query</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_dev_server/source/struct.BodyVc.html\" title=\"struct turbopack_dev_server::source::BodyVc\">BodyVc</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_dev_server/source/struct.Body.html\" title=\"struct turbopack_dev_server::source::Body\">Body</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_dev_server/source/struct.ContentSourceDataVary.html\" title=\"struct turbopack_dev_server::source::ContentSourceDataVary\">ContentSourceDataVary</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_dev_server/source/headers/struct.Headers.html\" title=\"struct turbopack_dev_server::source::headers::Headers\">Headers</a>"]],
"turbopack_ecmascript":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_ecmascript/chunk/struct.EcmascriptChunkItemOptions.html\" title=\"struct turbopack_ecmascript::chunk::EcmascriptChunkItemOptions\">EcmascriptChunkItemOptions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_ecmascript/analyzer/imports/struct.ImportAnnotations.html\" title=\"struct turbopack_ecmascript::analyzer::imports::ImportAnnotations\">ImportAnnotations</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_ecmascript/analyzer/graph/struct.EffectsBlock.html\" title=\"struct turbopack_ecmascript::analyzer::graph::EffectsBlock\">EffectsBlock</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_ecmascript/typescript/resolve/struct.TsConfigResolveOptionsVc.html\" title=\"struct turbopack_ecmascript::typescript::resolve::TsConfigResolveOptionsVc\">TsConfigResolveOptionsVc</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"turbopack_ecmascript/analyzer/enum.ConstantValue.html\" title=\"enum turbopack_ecmascript::analyzer::ConstantValue\">ConstantValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"turbopack_ecmascript/analyzer/enum.ObjectPart.html\" title=\"enum turbopack_ecmascript::analyzer::ObjectPart\">ObjectPart</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"turbopack_ecmascript/analyzer/enum.JsValue.html\" title=\"enum turbopack_ecmascript::analyzer::JsValue\">JsValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_ecmascript/typescript/resolve/struct.TsConfigResolveOptions.html\" title=\"struct turbopack_ecmascript::typescript::resolve::TsConfigResolveOptions\">TsConfigResolveOptions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"turbopack_ecmascript/chunk/struct.EcmascriptChunkItemContent.html\" title=\"struct turbopack_ecmascript::chunk::EcmascriptChunkItemContent\">EcmascriptChunkItemContent</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()