# [BOJ] 2606. 바이러스

def dfs(start):
    global cnt
    visited[start] = 1  # 방문 표시
    for i in graph[start]:
        if visited[i] == 0:  # 방문하지 않았다면
            dfs(i)
            cnt += 1

n = int(input())  # 컴퓨터의 수
m = int(input())  # 네트워크 상에서 직접 연결되어 있는 컴퓨터 쌍의 수
graph = [[] * n for _ in range(n + 1)]  # 인덱스를 컴퓨터 번호로 사용할 것이므로
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

# graph = [[], [2, 5], [1, 3, 5], [2], [7], [1, 2, 6], [5], [4]]

cnt = 0
visited = [0] * (n + 1)

dfs(1)
print(cnt)