# [BOJ] 1012. 유기농 배추

T = int(input())  # 테스트 케이스 개수
for _ in range(T):
    # M: 배추밭 가로길이 / N: 세로길이 / K: 배추가 심어져 있는 위치의 개수
    M, N, K = map(int, input().split())
    points = [list(map(int, input().split()))]